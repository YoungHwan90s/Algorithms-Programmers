// function solution_first(s) {
//   let p = 0;
//   let y = 0;

//   for (i = 0; i < s.length; i++) {
//     if (s[i] === "p" || s[i] === "P") {
//       p++;
//     } else if (s[i] === "y" || s[i] === "Y") {
//       y++;
//     }
//   }

//   return p === y;
// }

// function solution_second(s) {
//   return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
// }

function solution_third(s) {
  let p = s.match(/p/ig) ? s.match(/p/ig).length : 0;
  let y = s.match(/y/ig) ? s.match(/y/ig).length : 0;

  if (p === y) {
    return true;
  } else if (p === 0 || y === 0) {
    return false;
  } else return false;
}