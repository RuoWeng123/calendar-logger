import cron from 'node-cron';
import os from 'os';
import path from 'path';
import fs from 'fs';
import {sendEmail} from "./sendEmail.js";
// 每天早上11：10执行
export const scheduler = () =>{
  cron.schedule('59 23 * * *', async () =>{
    try{
      // 检查是否有文件，有文件则发送
      const year = new Date().getFullYear();
      const month = new Date().getMonth() + 1;
      const day = new Date().getDate();
      const filePath = path.join(os.homedir(), `logger_${year}_${month}_${day}.txt`);
      if(fs.existsSync(filePath)){
        // 发送邮件
        sendEmail('ruoweng314@gmail.com','XX项目错误日志', '请查看附件', [{path: filePath}])
        console.log('发送邮件');
      }
    }catch (e) {
      console.log('定时任务错误', e);
    }
  },{
    timezone: 'Asia/Shanghai'
  })
}

