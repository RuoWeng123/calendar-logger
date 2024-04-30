/*
1. 接口错误
2. 接口返回空
3. 接口返回 false
4. 数据类型检查，检查数据返回的格式是否错误，例如返回的应该是数组，但是返回的是字符串，或者 object
5. 数据范围检查，检查返回的数据 是否有百分比求和 超过100%； 负数 等逻辑
6. 异常数据巡查，需要用户输入一个界值
a. 趋势异常：某一天数据突然是之前平稳数据的好几倍，或者趋势变化过大逻辑。
  b. 越过临界值：
  c. 离散程度太大:  方差和标准差
  d. 中心趋势分析：
  e. 线性相关分析： 用于表示两类数据线性相关的程度， 协方差或者相关系数*/
export const checkError = (data) =>{
  if(data.code !== 200){
    return false;
  }
  if(data.data === null){
    return false;
  }
  if(data.data === false){
    return false;
  }
  return true;
}
export const checkDataType = (data, hopeType) =>{
  return typeof data === hopeType;
}
export const checkDataRange = (data, hopeRange) =>{
  if(Array.isArray(data)){
    return data.some(item => item > hopeRange || item < 0);
  }
  if(typeof data === 'object'){
    return Object.values(data).some(item => item > hopeRange || item < 0);
  }
  return data > hopeRange || data < 0;
}
// 检查百分比求和是否超过100%
export const checkSumRt100 = (data) =>{
  if(Array.isArray(data)){
    return false;
  }
  return data.reduce((acc, cur) => acc + cur, 0) > 100;
}
// 检查趋势异常，增长趋势 相比之前突然变大；或者变小
export const checkTrend = (data, threshold) =>{
  return data.some((item, index) => {
    if(index === 0){
      return false;
    }
    return item / data[index - 1] > threshold;
  });
}
// 计算方差，统计离散值
export const getVariance = (data) =>{
  const avg = data.reduce((acc, cur) => acc + cur, 0) / data.length;
  return data.reduce((acc, cur) => acc + Math.pow(cur - avg, 2), 0) / data.length;
}

// 利用方差，统计所有数据的离散程度
export const checkVariance = (data, threshold) =>{
  let newData = data.map(item =>{
  
  })
}
