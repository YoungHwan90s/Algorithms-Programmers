function solution(number) {
    var answer = 0;

    for (i = 0; i < number.length; i++) {
        for(j = i + 1; j < number.length; j++) {
            for (e = j + 1; e < number.length; e++) {
                if (number[i] + number[j] + number[e] === 0) {
                    answer += 1
                }
            }

        }
    }

    return answer;
}