// function soltuion(arr) {
//   let acc = 0;
//   let answer = 0;
//   for (i = 0; i < arr.length; i++) {
//     acc += arr[i];
//   }
//   answer = acc / arr.length;
//   return answer;
// }


function solution(array) {
    return array.reduce((a, b) => a + b, 0) / array.length
}