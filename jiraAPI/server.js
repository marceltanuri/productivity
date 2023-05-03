const express = require('express');
const app = express();
const router = express.Router();
const JiraClient = require('./JiraClient')

module.exports = async function start(port) {

  console.log("Starting Jira client...")
  const jiraClient = await initJiraClient()

  router.get('/:endpoint*', async function (req, resp) {

    const jiraCookies = await jiraClient.getCookiesAsString()

    fetch(`https://${process.env.jira_company_host}/${req.params.endpoint}/${req.params[0]}`, {
      "headers": {
        "cookie": `${jiraCookies}`
      },
      "body": null,
      "method": "GET"
    }).then(res => {
      res.json().then(res => {
        resp.send(res)
      })
    })
  })

  app.use('/', router);

  if (port == undefined || isNaN(port))
    port = 3001

  app.listen(process.env.port || port);

  console.log(`Running at Port ${port}`);

}

async function initJiraClient() {
  const jiraClient = await new JiraClient().init()
  await jiraClient.doAuth()
  return jiraClient
}

