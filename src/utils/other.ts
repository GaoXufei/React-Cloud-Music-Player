// 将数组中的数据转为字符串并且用 / 分隔
export const getNameString = (list: any) => {
  const arr = list.map((item: any) => item.name);
  return arr.join('/');
}

// 判断一个对象是否为空对象
export const isEmptyObject = (obj: any) => !obj || Object.keys(obj).length === 0;