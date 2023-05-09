// function isPrime(num) {
//     if (num === 1) {
//         return false;
//     } else if (num === 2) {
//         return true;
//     } else {
//         for (let i = 2; i < num; i++) {
//             if (num % i === 0) { 
//                 return false;
//             }
//         }
//         return true;
//     }
// }

// function solution(n) {
//     let answer = 0
//     for (i = 2; i <= n; i++) {
//         if (isPrime(i) === true){
//              answer += 1
//         }
//     }
//     return answer
// }

// console.log(solution(5))