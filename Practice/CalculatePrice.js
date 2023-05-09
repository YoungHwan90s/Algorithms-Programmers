function solution(price, money, count) {
    let totalPrice = 0
    let result = 0
    for (i = 1; i <= count; i++) {
        totalPrice += price * i
    }
    if (totalPrice > money ) {
        result = totalPrice - money
        return result
    } else {
        return 0
    }
}