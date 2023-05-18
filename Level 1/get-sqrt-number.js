// If n is the square root of an integer x, return (x + 1) squared; otherwise, return -1.

function solution(n) {
    const sqrt = Math.sqrt(n)

    if (Number.isInteger(sqrt)) {
        return Math.pow(sqrt + 1, 2)
    } else {
        return -1
    }
}

// CORRECTION

function solution(n) {
    const sqrt = Math.sqrt(n);

    return Number.isInteger(sqrt) ? Math.pow(sqrt + 1, 2) : -1
}