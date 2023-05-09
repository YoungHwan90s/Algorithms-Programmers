// function solution(array, commands) {
//     var answer = [];
//     commands.map((command) => {
//         let slice = array.slice(command[0] - 1, command[1])
//         slice.sort((a, b) => a - b)
//         answer.push(slice[command[2] - 1])
//     })
//     return answer;
// }


function solution(array, commands) {
   return commands.map((command) => {
        return array.slice(command[0] - 1, command[1]).sort((a, b) => a - b).slice(command[2] - 1, command[2])[0]
    })
}

console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]] ))