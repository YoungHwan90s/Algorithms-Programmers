// 두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    answer += getDivisors(i);
  }
  return answer;
}

function getDivisors(n) {
  let arr = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }
  if (arr.length % 2 === 0) {
    return +n;
  } else {
    return -n;
  }
}


// CORRECTION

// !!! 제곱수는 홀수가 된다
function solution(left, right) {
    let answer = 0;
    for (let i = left; i <= right; i++) {
      if (Number.isInteger(Math.sqrt(i))) {
        answer -= i;
      } else {
        answer += i;
      }
    }
    return answer;
  }
  
console.log(sol(13, 17));
