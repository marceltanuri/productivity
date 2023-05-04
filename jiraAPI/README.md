# Jira Client

It creates a proxy in front of Jira REST API. It was motivated due to some scenarios where JIRA Rest API is not available through basicAuth and/or oAuth is not configured.

## How it works

### * An automated browser is started
```
    Login page is opened, username and password are submited > 
    
        Once authenticated, the automated browser recieves cookies containing valid session tokens
```

### * A webserver is started
```
The nodeJS webserver role as a proxy > 
    requests sent to the webserver are internally redirected to JIRA API, those cookies recieved by the automated browser are user at this point.
```

### Configure and start your container

```
sudo docker run -p 3001:3001 --name jira-client -d \
    -e jira_username="your_jira_username" \
    -e jira_pw="your_jira_password" \
    -e jira_host="id.atlassian.com" \
    -e jira_company_host="company.atlassian.net" \
    marceltanuri/jira-client 
```

____________

### Tips

* jira_user_name : `jira username that you use to login`

* jira_pw : `jira password that you use to login`

* jira_host : `jira sso host, usually is id.atlassian.com`

* jira_company_host : `your jira company address, for example: yourcompany.atlassian.net`

____________


### The server will be available at localhost:3001

test:

http://localhost:3001/rest/api/3/serverInfo

____________


### Docker image
https://hub.docker.com/repository/docker/marceltanuri/jira-client/tags?page=1&ordering=last_updated


### JIRA API Doc
https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#version