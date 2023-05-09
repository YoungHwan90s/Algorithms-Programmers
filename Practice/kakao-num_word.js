function jarryd(s) {
    const yh = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

    yh.forEach((vocab, index) => {
        if (s.includes(vocab)) {
            s = s.replaceAll(vocab, index)
        }
    })
    return s
}

console.log(jarryd("23four5six7"))