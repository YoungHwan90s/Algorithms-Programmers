// [1,1,3,3,0,1,1]	-> [1,3,0,1]

function solution(arr) {
  let answer = [];
  answer.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== answer[answer.length - 1]) {
      answer.push(arr[i]);
    } else {
      continue;
    }
  }
  return answer;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));


// reduce() 함수 이용
function solution(arr) {
    return arr.reduce((answer, current) => {
        if (current !== answer[answer.length - 1]) {
            answer.push(current)
        }
        return answer;
    }, [])
}

// 오지는 정답
function solution(arr) {
    return arr.filter((value, index) => value !== arr[index + 1]);
}