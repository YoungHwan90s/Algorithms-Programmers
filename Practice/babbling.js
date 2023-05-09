function solution(babbling) {
  var answer = 0;

  const baby = ["aya", "ye", "woo", "ma"];

  for (let i = 0; i < babbling.length; i++) {
    let babble = babbling[i];

    for (let j = 0; j < baby.length; j++) {
      if (babble.includes(baby[j].repeat(2))) {
        break;
      }
      babble = babble.split(baby[j]).join(" ");
    }
    if (babble.split(" ").join("").length === 0) {
      answer++;
    }
  }
   
  return answer;
}