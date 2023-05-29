function findRange(num) {
    const numStr = num.toString();

    let maxVal = numStr[0] !== '9' ? parseInt(numStr.replaceAll(numStr[0], '9')) : parseInt(numStr.replaceAll(numStr[1], '9'));
    let minVal = numStr[0] !== '1' ? parseInt(numStr.replaceAll(numStr[0], '1')) : num;
    
    if (minVal === num) {
        for (let i = 1; i < numStr.length; i++) {
            if (numStr[0] !== numStr[i]) {
                minVal = parseInt(numStr.replaceAll(numStr[i], '0'))
                break;
            };
        };  
    };
    return maxVal - minVal;
  };
  