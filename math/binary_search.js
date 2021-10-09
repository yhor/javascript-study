
function binary(max, hiddenValue) {
  let min = 1;
  let avg = max / 2;
  let search_cnt = 0;

  while (true) {
    search_cnt++;
    
    if (avg === hiddenValue) break;

    if (hiddenValue > avg) { //크면
      min = avg + 1;
    } else { //작다면
      max = avg - 1;
    }

    avg = Math.floor((min + max) / 2);

    //값이 없다
    if (min > max) return -1;
  }

  return search_cnt;
}

function linear(max, hiddenValue) {
  let i = 1;

  while (i <= max) {
    if (i === hiddenValue) return i;
    i++;
  }
  return -1;
}


const maxCnt = 100;
let loopCnt = 5;

let linearTotal = 0;
let binaryTotal = 0;

while (loopCnt) {
  // const hiddenValue = Math.floor(Math.random() * maxCnt) + 1;
  const hiddenValue = 98;

  linearTotal += linear(maxCnt, hiddenValue);
  binaryTotal += binary(maxCnt, hiddenValue);
  loopCnt--;
}

console.log(`선형 탐색 - 탐색 수 (${linearTotal})`);
console.log(`이진 탐색 - 탐색 수 (${binaryTotal})`);
