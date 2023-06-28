// function solution(s, n) {
//   const chars =
//     "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXY                          ";
//   return s
//     .split("")
//     .map((e) => chars[chars.indexOf(e) + n])
//     .join("");
// }

function solution(s, n) {
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lower = "abcdefghijklmnopqrstuvwxyz";
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    let text = s[i];
    if (text == " ") {
      answer += " ";
      continue;
    }
    let textArr = upper.includes(text) ? upper : lower;
    let index = textArr.indexOf(text) + n;
    if (index >= textArr.length) {
      index -= textArr.length;
    }
    answer += textArr[index];
  }
  return answer;
}

console.log(solution("AB", 1));
