import {scheduler} from "../src/schedule.js";

scheduler({
  time: '59 23 * * *',
  formEmail: '425664376@qq.com',
  formEmailPass: '这是你的授权码',
  toEmail: 'ruoweng314@gmail.com',
  subject: '测试',
  text: '测试',
  filePaths: []
});
