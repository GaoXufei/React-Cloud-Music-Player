
export default (fn: (() => void) | null, delay: number) => {
  let timer: any;
  return function timeFunc(...args: any) {
    if (timer) clearTimeout(timer);
    if (!fn) return;
    timer = setTimeout(() => {
      fn.apply(timeFunc, args);
      clearTimeout(timer);
    }, delay)
  }
}