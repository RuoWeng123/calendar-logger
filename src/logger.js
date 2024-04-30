// 暴露一个方法，用于记录日志。 当天还没有日志的时候需要新建一个
import  *  as  winston  from  'winston';
import  'winston-daily-rotate-file';

const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const day = new Date().getDate();
const filePath =  `${window.location.origin}/logger_${year}_${month}_${day}.txt`;
const transport = new winston.transports.DailyRotateFile({
  filename: filePath,
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '3d'
});

transport.on('error', error => {
  // log or handle errors here
});

transport.on('rotate', (oldFilename, newFilename) => {
  // do something fun
});

export const logger = winston.createLogger({
  transports: [
    transport
  ]
});
export const logOfOverlap = (el, brother) =>{
  // 元素珍藏
  console.log('元素重叠')
  console.log(el, brother);
  // logger.info(el);
}
export const logOfBeyond = (el, parent) =>{
  // 元素超出
  console.log('元素超出')
  console.log(el, parent);
  // logger.info(el);
}
export const logOfError = (content) =>{
  logger.error(content);
}
export const logOfInfo = (content) =>{
  logger.info(content)
}
