import cron from 'node-cron';
import os from 'os';
import path from 'path';
import fs from 'fs';
import {sendEmail} from "./sendEmail.js";
// 每天早上11：10执行
export const scheduler = ({options}) =>{
  const {time, fromEmail, fromEmailPass, toEmail, subject, text, filePaths:[]} = options;
  cron.schedule(time, async () =>{
    try{
      let attachments = [];
      if(filePaths.length > 0){
        filePaths.forEach((filePath) =>{
          if(fs.existsSync(filePath)){
            attachments.push({path: filePath});
          }
        })
      }else{
        // 检查是否有文件，有文件则发送
        const year = new Date().getFullYear();
        const month = new Date().getMonth() + 1;
        const day = new Date().getDate();
        const filePath = path.join(os.homedir(), `logger_${year}_${month}_${day}.txt`);
        attachments = [
          {path: filePath}
        ]
      }
      if(attachments.length > 0){
        // 发送邮件
        sendEmail(fromEmail, fromEmailPass, toEmail,subject, text, attachments)
      }
    }catch (e) {
      console.log('定时任务错误', e);
    }
  },{
    timezone: 'Asia/Shanghai'
  })
}

