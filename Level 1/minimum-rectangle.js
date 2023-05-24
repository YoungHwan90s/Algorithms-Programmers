function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;
    
    // 가로 길이와 세로 길이 중 최대값을 구하고...
    for (let i = 0; i < sizes.length; i++) {
      const [width, height] = sizes[i];
      maxWidth = Math.max(maxWidth, Math.max(width, height));
      maxHeight = Math.max(maxHeight, Math.min(width, height));
    }
    
    // 지갑의 크기 구하기
    const walletSize = maxWidth * maxHeight;
    
    return walletSize;
  }


console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]))
