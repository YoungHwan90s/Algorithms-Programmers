// function solution(sizes) {
//     let maxWidth = 0;
//     let maxHeight = 0;
    
//     // 가로 길이와 세로 길이 중 최대값을 구하고...
//     for (let i = 0; i < sizes.length; i++) {
//       const [width, height] = sizes[i];
//       maxWidth = Math.max(maxWidth, Math.max(width, height));
//       maxHeight = Math.max(maxHeight, Math.min(width, height));
//     }
    
//     const walletSize = maxWidth * maxHeight;
//     return walletSize;
//   }

function solution(sizes) {
    const [hor, ver] = sizes.reduce(([a, b], [c, d]) => [Math.max(a, Math.max(c, d)), Math.max(b, Math.min(c, d))], [0, 0])
    return hor * ver;
}

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]))
