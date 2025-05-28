let start = 0;
let mid = 5;
let isInMide = false;

for (let i = 0; i < 9; i++) {
  let str = "";
  for (let j = 0; j < 10; j++) {
    let startIndex = mid + start;
    let endIndex = mid - j;
    if (startIndex >= j && endIndex <= j) {
      str += "*";
    } else {
      str += " ";
    }
  }

  if (i === 4) {
    isInMide = true;
    start--;
  }

  if (!isInMide) {
    start++;
  } else {
    start--;
  }

  str += "\n";
  console.log(str);
}
