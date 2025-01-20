export const paginate = (total, current) => {
  const arr = [];
  const arrStart = 0;
  const arrEnd = 8;
  for (let i = arrStart; i <= arrEnd; i++) {
    arr[i] = 0;
  }
  const CURRPOS = 4;
  arr[CURRPOS] = current;
  for (let i = 1; i <= 4; i++) {
    if (current - i < 1) {
      arr[CURRPOS - i] = 0;
      break;
    }
    if (i === 3) {
      if (current - i === 1) {
        arr[CURRPOS - i] = 1;
      } else {
        arr[CURRPOS - i] = '...';
        arr[arrStart] = 1;
      }
      break;
    }
    if (i === 4) {
      arr[arrStart] = 1;
    } else {
      arr[CURRPOS - i] = current - i;
    }
  }
  for (let i = 1; i <= 4; i++) {
    if (current + i > total) {
      arr[CURRPOS + i] = 0;
      break;
    }
    if (i === 3) {
      if (current + i === total) {
        arr[CURRPOS + i] = total;
      } else {
        arr[CURRPOS + i] = '...';
        arr[arrEnd] = total;
      }
      break;
    }
    if (i === 4) {
      arr[arrEnd] = total;
    } else {
      arr[CURRPOS + i] = current + i;
    }
  }
  return arr;
};
