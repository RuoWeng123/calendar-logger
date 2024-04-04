// 暴露一个方法，用于记录日志。 当天还没有日志的时候需要新建一个

import fs from 'fs';
import os from 'os';
import path from 'path';
// 记录日志逻辑，请在需要的位置，调用logger方法
export const logger = (content) => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();
  const filePath = path.join(os.homedir(), `logger_${year}_${month}_${day}.txt`);
  if(fs.existsSync(filePath)){
    fs.appendFileSync(filePath, formatContent(content) + '\n');
  }else{
    fs.writeFileSync(filePath, formatContent(content) + '\n');
  }
}

const formatContent = (content) => {
  return `${new Date().toLocaleString()}: ${checkErrorType(content)}`;
}
// XXX 后续可能还有细分类型优化，便于快速定位问题
const checkErrorType = (content) => {
  if(content instanceof Error){
    return content.stack;
  }else{
    return content;
  }
}

export const initLogger = () => {
  let count = 0;
  const intervalId = setInterval(() => {
    logger(`this is a log ${count}, 测试记录日志功能`);
    count++;
    if(count > 10){
      clearInterval(intervalId);
    }
  }, 5000)
}
