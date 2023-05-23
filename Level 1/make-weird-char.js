function solution(s) {
    let answer = [];
    let dividedWords = s.split(" ");
  
    dividedWords.forEach((word, wordIndex) => {
      word.split("").forEach((char, charIndex) => {
        if (charIndex === 0 || charIndex % 2 === 0) {
          answer.push(char.toUpperCase());
        } else {
          answer.push(char.toLowerCase());
        }
      });
  
      if (wordIndex !== dividedWords.length - 1) {
        answer.push(" ");
      }
    });
  
    return answer.join("");
  }

console.log(solution("try hello world"));
