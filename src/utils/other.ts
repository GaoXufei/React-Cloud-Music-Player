export const getNameString = (list: any) => {
  const arr = list.map((item: any) => item.name);
  return arr.join('/');
}