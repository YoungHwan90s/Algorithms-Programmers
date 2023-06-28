// 해쉬 테이블로 이름이랑 점수 저장하고
// photo 배열 돌면서 그 사람 점수가 있으면 그 그룹 점수를 담을 변수에 넣고 result 배열에 추가
function solution(name, yearning, photo) {
  const scores = {};

  // 해시 테이블에 각 사람의 그리움 점수 저장
  for (let i = 0; i < name.length; i++) {
    scores[name[i]] = yearning[i];
  }

  const result = [];

  // 각 사진별 추억 점수 계산
  for (let i = 0; i < photo.length; i++) {
    let photoScore = 0;
    for (let j = 0; j < photo[i].length; j++) {
      const person = photo[i][j];
      if (scores.hasOwnProperty(person)) {
        photoScore += scores[person];
      }
    }
    result.push(photoScore);
  }

  return result;
}

const names = ["may", "kein", "kain"];
const yearnings = [5, 10, 1];
const photos = [
  ["may", "kein", "kain"],
  ["kali", "mari", "don", "tony"],
];
console.log(solution(names, yearnings, photos));
// 예상 출력: [16, 67]
