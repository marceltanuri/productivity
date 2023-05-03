const express = require('express');
const app = express();
const router = express.Router();
const JiraClient = require('./JiraClient')

module.exports = async function start(port) {

  console.log("Starting Jira client...")
  const jiraClient = await initJiraClient()

  router.get('/', async function (req, res) {
    let resBody = JSON.parse(await jiraClient.callService(req.query.endpoint))
    res.send(resBody)
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

