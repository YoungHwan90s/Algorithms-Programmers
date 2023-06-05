// 문자열 s가 주어졌을 때, s의 각 위치마다 자신보다 앞에 나왔으면서, 자신과 가장 가까운 곳에 있는 같은 글자가 어디 있는지 알고 싶습니다.
// 예를 들어, s="banana"라고 할 때 result = [-1, -1, -1, 2, 2, 2]

// function solution(s) {
//   let answer = [];
//   let keyAndIndexMap = {};

//   for (let i = 0; i < s.length; i++) {
//     let currentChar = s[i];

//     if (keyAndIndexMap[currentChar] === undefined) {
//       answer.push(-1);
//     } else {
//       answer.push(i - keyAndIndexMap[currentChar]);
//     }
//     keyAndIndexMap[currentChar] = i;
//   }
//   return answer;
// }

// console.log(solution("banana"));

// function solution(s) {
//     let keyAndIndexMap = {};

//     return [...s].reduce((array, curr, index) => {
//       if (keyAndIndexMap[curr] === undefined) {
//         array.push(-1);
//       } else {
//         array.push(index - keyAndIndexMap[curr]);
//       }
//       keyAndIndexMap[curr] = index;

//       return array;
//     }, []);
//   }

// function solution(s) {
//   let keyAndIndexMap = {};

//   return [...s].reduce((array, curr, index) => {
//     array.push(
//       keyAndIndexMap[curr] === undefined ? -1 : index - keyAndIndexMap[curr]
//     );
//     keyAndIndexMap[curr] = index;

//     return array;
//   }, []);
// }

function solution(s) {
    let newMap = new Map();

    return s.split('').reduce((array, curr, index)=> {
        array.push(newMap.has(curr) === true ? index - newMap.get(curr) : -1)

        newMap.set(curr, index);
        return array;
    }, [])

}

console.log(solution("banana"));
