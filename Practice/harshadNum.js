function solution(x) {

    let y = String(x)
    let sum = 0

    for (let i = 0; i < y.length; i ++ ) {
        sum += Number(y[i])
    }

    return x % sum === 0 
}
