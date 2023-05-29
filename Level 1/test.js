function maxLength(k, a) {
  let maxLength = 0;
  let sum = 0;
  let i = 0;

  for (let j = 0; j < a.length; j++) {
    sum += a[j];

    while (sum > k) {
      sum -= a[i];
      i++;
    }

    const length = j - i + 1;
    maxLength = Math.max(maxLength, length);
  }

  return maxLength;
}

console.log(maxLength(4, [6,4,3,1,2,1,4]));
