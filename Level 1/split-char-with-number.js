function solution(t, p) {
    let count = 0;
    const pValue = parseInt(p);
  
    for (i = 0; i <= t.length - p.length; i++) {
      const subString = t.substr(i, p.length);
      const subStringValue = parseInt(subString);
  
      if (subStringValue <= pValue) {
        count++;
      } else {
        continue;
      }
    }
    return count;
  }

// CORRECTION

function solution(t, p) {
  let count = 0;

  for (i = 0; i <= t.length - p.length; i++) {
    const subString = t.substr(i, p.length);

    if (+subString <= +p) {
      count++;
    }
  }
  return count;
}
