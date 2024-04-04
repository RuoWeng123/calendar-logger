# 记录错误日志，同时每天定期发送邮件
* 代码中写死了，只支持 qq邮箱;如果需要请在 src目录下自行修改 sendEmail 代码
* 授权码请在邮箱设置中开启 smtp 服务，获取授权码
## schedule func params
```js
// schedule(options)
const options = {
  time: '59 23 * * *',
  formEmail: '*******@qq.com',
  formEmailPass: '这是你的授权码',
  toEmail: '*****@gmail.com',
  subject: ' XXXX 服务日志',
  text: '您好，请查看附件，这是今天的服务日志',
  filePaths: []  // 建议采用 path.join(__dirname, 'logs', 'error_2024_1_3.log') 写入绝对路径
}
```
## logger func params
```js
// logger(error)
// logger(str)
```
