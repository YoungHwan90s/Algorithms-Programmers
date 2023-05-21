// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// function solution(s) {
//   let answer = "";
//   let index = Math.floor(s.length / 2);
//   if (s.length % 2 !== 0) {
//     answer += s[index];
//   } else {
//     console.log(index)
//     answer += s.slice(3, 5);
//   }
//   return answer;
// }



function solution(s) {
    const mid = Math.floor(s.length / 2);

    return s.length % 2 === 1 ? s[mid] : s[mid - 1] + s[mid]
}
console.log(solution("abcdeedd"));
