module.exports = function getZerosCount(number, base) {
  let dividers = new Array(base + 1).fill(0);
  
  for(let i = 2, len = Math.sqrt(base); i < len; ++i) {
    while(base % i == 0) {
      dividers[i]++;
      base /= i;
    }
  }

  if(base != 1) {
    dividers[base]++;
  }


  let min = Number.MAX_SAFE_INTEGER;

  for(let i = 0, len = dividers.length; i < len; ++i) {
    if(dividers[i] > 0) {
      let sum_for_simple_divider = 0;
      let temp = number;
      while(temp != 0) {
        temp /= i;
        sum_for_simple_divider += temp;
      }
      temp = Math.floor(Math.floor(sum_for_simple_divider)/dividers[i]);
      if(temp < min) {
        min = temp;
      }
    }
  }
  return min;
}