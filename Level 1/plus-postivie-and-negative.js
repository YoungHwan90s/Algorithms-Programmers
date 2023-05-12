// example
// absolutes [4,7,12]
// signs [true,false,true]
// result 9

function solution(absolutes, signs) {
  let result = absolutes.map((value, index) => {
    return signs[index] ? value : -value;
  });
  return result.reduce((acc, curr) => acc + curr, 0);
}


function solution(absolutes, signs) {
    let answer = 0
    for (let i = 0; i < absolutes.length; i++) {
        signs[i] ? answer += absolutes[i] : answer -= absolutes[i]
    }
    return answer
}
