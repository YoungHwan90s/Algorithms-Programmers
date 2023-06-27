// 2016년 1월 1일 금요일
// a, b를 입력 받아 2016년 a월 b일이 무슨 요일인지 return

// function solution(a, b) {
//     const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
//     const date = new Date(`2016-${a}-${b}`);
//     const dayOfWeek = date.getDay();
//     return days[dayOfWeek];
//   }

function solution(a, b) {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const date = new Date(`2016=${a}-${b}`);
  const dayOfWeek = date.getDay(); // 요일 인덱스 출력
  return days[dayOfWeek];
}

console.log(solution(4, 15));
