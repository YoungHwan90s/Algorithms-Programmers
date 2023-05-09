function solution(food) {
  let leftArr = []

  food.forEach((singleFood, index) => {
    if ( singleFood >= 2 ) {
      const share = parseInt(singleFood / 2)
      leftArr.push(String(index).repeat(share))
    } else return
  })

    const rightArr = [...leftArr].reverse()
    const together = [leftArr.join(''), 0, rightArr.join('')].join('')

  return together
}


console.log(solution([1,3,4,6]))