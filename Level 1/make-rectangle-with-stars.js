function solution(n, m) {
  for (let i = 0; i < m; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += "*";
    }
    console.log(row);
  }
}

solution(5, 3);
