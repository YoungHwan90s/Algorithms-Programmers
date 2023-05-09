function solution(a, b) {
    const gcd = (n ,m) => {
        if (m === 0) return n
        return gcd(m, n % m)
    }
    const lcm = (n, m) => (n * m) / gcd(n, m)
    return [gcd(a, b), lcm(a, b)]
}