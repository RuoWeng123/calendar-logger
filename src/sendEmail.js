import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host:'smtp.qq.com',
    port: 465,
    auth:{
      user: '425664376@qq.com',
      pass: '授权码'
    }
})

export const sendEmail = async (to, subject, text, attachments= []) =>{
  try{
    await transporter.sendMail({
      from: '425664376@qq.com',
      to,
      subject,
      text,
      attachments,
    })
  }catch (e) {
    console.error('send email error', e);
  }
}
