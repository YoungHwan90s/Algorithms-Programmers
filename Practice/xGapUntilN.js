function solution(x, n) {
    var answer = [];
    let y = x
    
    while(answer.length !== n) {
        answer.push(x)
        x += y

    }
    return answer;
}