function solution(num) {
    let answer = 0;
    
    while (num !== 1) {
        if (num % 2 === 0){
            num /= 2;
        } else {
            num = (num * 3) + 1;
        }
        answer += 1;
    }
    if (answer >= 500) {
        return -1;
    } else {
        return answer;
    }
}

function collatz(num,count = 0) {
    return num == 1 ? (count >= 500 ? -1 : count) : collatz(num % 2 == 0 ? num / 2 : num * 3 + 1,++count);
}