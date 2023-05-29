function longestChain(words) {
  let newArray = words.sort((a, b) => b.length - a.length);
  let sortedNewArray = newArray.map(word => word.split('').sort().join(''))

  let maxLength = [];

  for (let i = 0; i < sortedNewArray.length; i++) {
    let length = 0;
    if(sortedNewArray[i].length > 1) {
      for (let j = 1; j < sortedNewArray.length; j++) {
        if(sortedNewArray[j].includes(sortedNewArray[i].split[''])) {
          length ++;
        }
      }
      maxLength.push(length);
    }
  }

  return maxLength.sort().pop()
}

console.log(longestChain(['a', 'b', 'ba', 'bca', 'bda', 'bdca']));


