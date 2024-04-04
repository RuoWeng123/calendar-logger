# 记录错误日志，同时每天定期发送邮件

## schedule func params
```js
// schedule(options)
const options = {
  time: '59 23 * * *',
  formEmail: '425664376@qq.com',
  formEmailPass: '这是你的授权码',
  toEmail: 'ruoweng314@gmail.com',
  subject: '测试',
  text: '测试',
  filePaths: []
}
```
## logger func params
```js
// logger(error)
// logger(str)
```
