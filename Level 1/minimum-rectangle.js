function solution(sizes) {
  let answer = 0;
  let left = []
  let right = []

  for(let i = 0; i < sizes.length; i++) {
    left.push(sizes[i][0])
    right.push(sizes[i][1])
  }

return [left, right]
  
}

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]))
