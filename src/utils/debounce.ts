// export default (fn: (() => void) | null, delay: number) => {
//   let timer: any;
//   return function timeFunc(...args: any) {
//     if (timer) clearTimeout(timer);
//     if (!fn) return;
//     timer = setTimeout(() => {
//       fn.apply(timeFunc, args);
//       clearTimeout(timer);
//     }, delay)
//   }
// }


export default (fn: () => void, delay: number) => {
  let delays: number = delay || 500;
  let timer: any;
  return function timeFunc(...args: any) {
    let th = timeFunc;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      timer = null;
      fn.apply(th, args);
    }, delays);
  };
}