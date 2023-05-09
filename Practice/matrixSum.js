function solution(arr1, arr2) {
    var answer = [];

    for (let i = 0; i < arr1.length; i++) {
        // answer.push(new Array()) 이건 사용하지 말라네...?
        answer.push([])

        for(let j = 0; j < arr1[0].length; j++ ) {
            answer[i].push(arr1[i][j] + arr2[i][j])
        }
    }
    return answer;
}