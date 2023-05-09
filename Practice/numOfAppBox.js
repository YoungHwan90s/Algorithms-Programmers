function solution(k, m, score) {
    let answer = 0;

    score.sort((a, b) => b - a) 
    let boxMinNum = m - 1

    for (let i = boxMinNum; i < score.length; i+= m) {
        answer += score[i] * m
    }

    return answer;
}
  

