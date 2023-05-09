function solution(phone_number) {

    let answer = '*'.repeat(phone_number.length - 4) + phone_number.slice(phone_number.length - 4, phone_number.length)

    return answer;
}
console.log(solution("01033334444"))
