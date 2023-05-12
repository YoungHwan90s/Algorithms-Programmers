// change the number given to descending order

function solution(n) {
    return parseInt((n + '').split('').sort((a, b) => b - a).join(''))
}

function solution(n) {
    return parseInt((n + '').split('').sort().reverse().join(''))
}

