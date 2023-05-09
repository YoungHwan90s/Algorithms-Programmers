function solution(numbers) {
    let answer = 0

  
    for( i = 0; i < 10; i ++) {
        const a = numbers.sort((a, b) => a - b)
        if (a[i] !== i) {
            answer += i
            a.push(i)
        } else if (a[i] === 'undefined') {
        answer += i
        a.push(i)
        }
    }
    return answer;
}

console.log(solution([1,2,3,4,6,7,8,0]))
