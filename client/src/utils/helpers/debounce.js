
export const debounce = (fn, delay = 500) => {
  let timeout;
  console.log("parent")
  
  return (...args) => {
    clearTimeout(timeout);
    console.log("child")
    timeout = setTimeout(() => { fn(...args) }, delay);
  }
}