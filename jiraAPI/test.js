fetch("https://liferay.atlassian.net/rest/agile/1.0/board", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "en-US,en;q=0.9",
    "cache-control": "max-age=0",
    "sec-ch-ua": "\"Chromium\";v=\"112\", \"Google Chrome\";v=\"112\", \"Not:A-Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Linux\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "none",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    //"cookie": "ajs_anonymous_id=%225e347f47-c0aa-48b0-a6d6-dfe8973021e3%22; experiment.team23.persistent.ipm.targeting.user.site.trait=false; confluence.experiment.team23.persistent.ipm.targeting.user.site.trait=false; atlassian.xsrf.token=6203b057-b1f0-4823-9643-79d1bf51f81e_289f49bd4929c3e8db78b225f3aa42f2cf492198_lin; JSESSIONID=7953222A4C35081647043F0E69CC58CF; cloud.session.token=eyJraWQiOiJzZXNzaW9uLXNlcnZpY2VcL3Byb2QtMTU5Mjg1ODM5NCIsImFsZyI6IlJTMjU2In0.eyJhc3NvY2lhdGlvbnMiOltdLCJzdWIiOiI1YjdiMGM5OWZlNDIyMTJhNzk2MWZlOTYiLCJlbWFpbERvbWFpbiI6ImxpZmVyYXkuY29tIiwiaW1wZXJzb25hdGlvbiI6W10sImNyZWF0ZWQiOjE2ODE3NTY4NTgsInJlZnJlc2hUaW1lb3V0IjoxNjgzMTQ1MDc4LCJ2ZXJpZmllZCI6dHJ1ZSwiaXNzIjoic2Vzc2lvbi1zZXJ2aWNlIiwic2Vzc2lvbklkIjoiYjdmODI0M2MtYzliMC00ODQyLThhMWItYWQ0MWVkNzZlZWY1Iiwic3RlcFVwcyI6W10sImF1ZCI6ImF0bGFzc2lhbiIsIm5iZiI6MTY4MzE0NDQ3OCwiZXhwIjoxNjg1NzM2NDc4LCJpYXQiOjE2ODMxNDQ0NzgsImVtYWlsIjoibWFyY2VsLnRhbnVyaUBsaWZlcmF5LmNvbSIsImp0aSI6ImI3ZjgyNDNjLWM5YjAtNDg0Mi04YTFiLWFkNDFlZDc2ZWVmNSJ9.OjjS-omgvSNhY6qOXNbCq2Jyq63ApxqPQfF5ekLVrcBHA9wAyEsXPxJs5SS9YksIl6I00np6Tj7A4d1tD0MMOVsQZzyKIBVjdRANMthNHAtvCDCJwk-GuJOXbEINEgJj0Cay4JuqWMXlXYInBrKkc7QN7MDyLTYpebeyx17SnJ34Bo62-PoZneZfC6g6s97UIWe_hVuU2Q9MsE3c8DOqG6oKuHSsHxjDr81WUzIlpHbV_94Aqj9WiUj_XUg1ufu2kAriOekLXanp1UvAJNHAorOr3oxGvl1I0KOw0vRLxF29Usth3rUk-7MMGErWhENNMW1QNS6-9UuLf-KUcZOrNg; tenant.session.token=eyJraWQiOiJzZXNzaW9uLXNlcnZpY2VcL3Byb2QtMTU5Mjg1ODM5NCIsImFsZyI6IlJTMjU2In0.eyJhc3NvY2lhdGlvbnMiOltdLCJzdWIiOiI1YjdiMGM5OWZlNDIyMTJhNzk2MWZlOTYiLCJlbWFpbERvbWFpbiI6ImxpZmVyYXkuY29tIiwiaW1wZXJzb25hdGlvbiI6W10sImNyZWF0ZWQiOjE2ODE3NTY4NTgsInJlZnJlc2hUaW1lb3V0IjoxNjgzMTQ1MDc4LCJ2ZXJpZmllZCI6dHJ1ZSwiaXNzIjoic2Vzc2lvbi1zZXJ2aWNlIiwic2Vzc2lvbklkIjoiYjdmODI0M2MtYzliMC00ODQyLThhMWItYWQ0MWVkNzZlZWY1Iiwic3RlcFVwcyI6W10sImF1ZCI6ImF0bGFzc2lhbiIsIm5iZiI6MTY4MzE0NDQ3OCwiZXhwIjoxNjg1NzM2NDc4LCJpYXQiOjE2ODMxNDQ0NzgsImVtYWlsIjoibWFyY2VsLnRhbnVyaUBsaWZlcmF5LmNvbSIsImp0aSI6ImI3ZjgyNDNjLWM5YjAtNDg0Mi04YTFiLWFkNDFlZDc2ZWVmNSJ9.OjjS-omgvSNhY6qOXNbCq2Jyq63ApxqPQfF5ekLVrcBHA9wAyEsXPxJs5SS9YksIl6I00np6Tj7A4d1tD0MMOVsQZzyKIBVjdRANMthNHAtvCDCJwk-GuJOXbEINEgJj0Cay4JuqWMXlXYInBrKkc7QN7MDyLTYpebeyx17SnJ34Bo62-PoZneZfC6g6s97UIWe_hVuU2Q9MsE3c8DOqG6oKuHSsHxjDr81WUzIlpHbV_94Aqj9WiUj_XUg1ufu2kAriOekLXanp1UvAJNHAorOr3oxGvl1I0KOw0vRLxF29Usth3rUk-7MMGErWhENNMW1QNS6-9UuLf-KUcZOrNg"
    "cookie": "__cuid=44e8e41e84014204ba9293ff65688287; ajs_anonymous_id=%2227e8b93f-1c0a-4ca5-ae33-c85cce330190%22; atlassian.account.xsrf.token=27fe77b5-946d-432e-be47-0d93a7b8bd61; atlassian.account.ffs.id=6376b3d9-fd28-4543-bbdd-ad2b370c94f2;"
  },
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET"
}).then(res=>{
    res.json().then(res=>{
        console.log(res)
    })
})