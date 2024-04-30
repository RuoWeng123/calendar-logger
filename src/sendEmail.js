import nodemailer from 'nodemailer';

export const sendEmail = async (from, formPass, to, subject, text, attachments= []) =>{
  try{
    const transporter = nodemailer.createTransport({
      host:'smtp.qq.com',
      port: 465,
      auth:{
        user: from,
        pass: formPass
      }
    })
    await transporter.sendMail({
      from,
      to,
      subject,
      text,
      attachments,
    })
  }catch (e) {
    console.error('send email error', e);
  }
}
function setCookie(name, value, days) {
  var date = new Date();
  date.setDate(date.getDate() + days);
  document.cookie = name + '=' + value + ';expires=' + date;
}
