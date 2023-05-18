function solution(arr) {
    if (arr.length <= 1) {
      return [-1];
    }
    
    const min = Math.min(...arr);
    const index = arr.indexOf(min);
    
    arr.splice(index, 1);
    
    return arr;
  }

  // CORRECTION

  function solution(arr) {
        arr.splice(arr.indexOf(Math.min(...arr)), 1)
        return arr.length > 0 ? arr : [-1]
  }