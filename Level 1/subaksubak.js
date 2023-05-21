// function solution(n) {
//   let answer = "";

//   for (let i = 0; i < n; i++) {
//     if (i % 2 === 0) {
//       answer += "수";
//     }
//     if (i % 2 !== 0) {
//       answer += "박";
//     }
//   }
//   return answer;
// }

// function solution(n) {
//     let answer = ''

//     for(let i = 0; i < n; i++) {
//         answer += i % 2 === 0 ? '수' : '박';
//     }

//     return answer
// }

function solution(n) {
    return '수박'.repeat(n).slice(0, n)
}

console.log(solution(1))