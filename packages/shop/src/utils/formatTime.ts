// from seconds
export function formatTime(num) {
  if (num < 3600) {
    const minutes = padZero(Math.floor(num / 60), 2);
    // const seconds = padZero(num % 60, 2);
    // return `${minutes}:${seconds}`;
    return `${minutes} Min`;
  } else {
    const hours: any = padZero(Math.floor(num / 3600), 2);
    const minutes = padZero(Math.floor((num - hours * 3600) / 60), 2);
    // const seconds = padZero(num % 60, 2);
    // return `${hours}:${minutes}:${seconds}`;
    return `${hours} H ${minutes} Min`;
  }
}

function padZero(num, size) {
  let s = String(num);
  while (s.length < size) {
    s = `0${s}`;
  }
  return s;
}
