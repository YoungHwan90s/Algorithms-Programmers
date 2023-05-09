function solution(lines) {
    lines = lines.map((line) => [line[0] + 100, line[1] + 100]);
    const arr = new Array(201).fill(0);
    
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        for (let j = line[0]; j < line[1]; j++) {
            arr[j] += 1;
        }
    }
    var answer = 0;
    for (let i = 0; i < arr.length; i++) {   
        if (arr[i] >= 2) {
            answer++;
        }
    }
    return answer;
}
    