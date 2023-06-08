// 콜라 빈 병 2개를 가져다주면 콜라 1병을 주는 마트가 있다. 빈 병 20개를 가져다주면 몇 병을 받을 수 있는가?
// 단, 보유 중인 빈 병이 2개 미만이면, 콜라를 받을 수 없다.

function solution(a, b, n) {
  let answer = 0;
  let currentBottles = n;

  while (currentBottles >= a) {
    let receivedCola = Math.floor(currentBottles / a) * b;
    answer += receivedCola;

    currentBottles = (currentBottles % a) + receivedCola;
  }
  return answer;
}

console.log(solution(2, 1, 20)); // 19
