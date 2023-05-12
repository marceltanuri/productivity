const express = require('express');
const app = express();
const router = express.Router();
const JiraClient = require('./JiraClient')
const bodyParser = require('body-parser')

module.exports = async function start(port) {
  
  console.log("Starting Jira client...")
  const jiraClient = await initJiraClient()
  
  var jsonParser = bodyParser.json()
  
  router.get('/:endpoint*', async function (req, res) {
    
    const jiraCookies = await jiraClient.getCookiesAsString()
    
    fetch(`https://${process.env.jira_company_host}/${req.params.endpoint}/${req.params[0]}`, {
      headers: {
        "cookie": `${jiraCookies}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body),
      method: "GET"
    }).then(fetchResponse => {

      sendResponse(res, fetchResponse)

    })
  })

  router.post('/:endpoint*', jsonParser, async function (req, res) {

    const jiraCookies = await jiraClient.getCookiesAsString()
    console.log("POST")
    console.log(req.body)
    console.log(`https://${process.env.jira_company_host}/${req.params.endpoint}/${req.params[0]}`)

    fetch(`https://${process.env.jira_company_host}/${req.params.endpoint}/${req.params[0]}`, {
      "headers": {
        "cookie": `${jiraCookies}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body),
      method: "POST"

    }).then(fetchResponse => {

      sendResponse(res, fetchResponse)

    }).catch(error=>console.log(error))
  })

  router.put('/:endpoint*', jsonParser, async function (req, res) {

    const jiraCookies = await jiraClient.getCookiesAsString()
    console.log(req.body)

    fetch(`https://${process.env.jira_company_host}/${req.params.endpoint}/${req.params[0]}`, {
      headers: {
        "cookie": `${jiraCookies}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body),
      method: "PUT"

    }).then(fetchResponse => {
      sendResponse(res, fetchResponse)
    })
  })

  app.use('/', router);

  if (port == undefined || isNaN(port))
    port = 3001

  app.listen(process.env.port || port);

  console.log(`Running at Port ${port}`);
}

function sendResponse(httpResponse, responseObj) {

  if (responseObj.ok) {
    responseObj.json().then(res => {
      httpResponse.send(res)
    })
  }

  else {
    httpResponse.send(responseObj.status)
  }

}

async function initJiraClient() {
  const jiraClient = await new JiraClient().init()
  await jiraClient.doAuth()
  return jiraClient
}

