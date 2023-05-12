const puppeteer = require('puppeteer');

module.exports = class JiraClient {

    browser = null
    page = null

    async init() {

        this.browser = await puppeteer.launch(
            {
                headless: false,
                defaultViewport: null,
                args: ['--start-maximized', '--no-sandbox']
            })


        this.page = await this.browser.newPage();
        return this
    }

    async doAuth() {
        console.log("Authenticating...")
        await this.page.goto(`https://${process.env.jira_host}/login?login_hint=${process.env.jira_username}&prompt=none&continue=https://${process.env.jira_company_host}/rest/api/3/serverInfo`);
        await this.#submitUsernameForm()
        await this.#submitPasswordForm()
        
        return this
    }

    async getCookies() {
        const client = await this.page.target().createCDPSession()
        return (await client.send('Network.getAllCookies')).cookies
    }

    async getCookiesAsString() {
        const cookies = await this.getCookies()

        let cookiesAsString = ""

        for (const cookie of cookies) {
            cookiesAsString += `${cookie.name}=${cookie.value}; `
        }

        return cookiesAsString;
    }


    async #submitUsernameForm() {
        console.log("Submiting username...")
        await this.page.waitForSelector('#username');
        await this.page.waitForTimeout(500)
        await this.#waitAndClick('#login-submit')

    }

    async #submitPasswordForm() {
        console.log("Inputing and Submiting password...")
        await this.page.waitForSelector('#password');
        await this.page.waitForTimeout(500)
        await this.page.type('#password', process.env.jira_pw);
        await this.#waitAndClick('#login-submit')
    }

    async #waitAndClick(selector) {
        await this.page.waitForFunction(
            `document.querySelector('${selector}') && document.querySelector('${selector}').clientHeight != 0`,
            { visible: true },
        );
        await this.page.evaluate((selector) => document.querySelector(selector).click(), selector)
    }

    async #waitAndReturn(selector) {
        await this.page.waitForFunction(
            `document.querySelector('${selector}') && document.querySelector('${selector}').clientHeight != 0`,
            { visible: true },
        );
        return await this.page.$(selector)
    }

    async callService(endpoint) {
        const url = `https://${process.env.jira_company_host}/${endpoint}`
        console.log(`Calling service from API: ${url}`)
        await this.page.goto(url)
        return await (await (await this.#waitAndReturn("pre")).getProperty("innerText")).jsonValue()
    }

    async close() {
        await this.browser.close()
    }

}
