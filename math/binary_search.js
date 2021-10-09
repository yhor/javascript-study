function binary(max, hiddenValue) {
  let min = 1;
  let avg;
  let search_cnt = 0;

  while (min <= max) {
    search_cnt++;

    avg = Math.floor((min + max) / 2);

    if (avg === hiddenValue) return search_cnt;

    if (hiddenValue > avg) { //크면
      min = avg + 1;
    } else { //작다면
      max = avg - 1;
    }
  }

  return -1;
}

function linear(max, hiddenValue) {
  let i = 1;

  while (i <= max) {
    if (i === hiddenValue) return i;
    i++;
  }
  return -1;
}


const maxCnt = 10000;
let loopCnt = 5;

let linearTotal = 0;
let binaryTotal = 0;

while (loopCnt) {
  const hiddenValue = Math.floor(Math.random() * maxCnt) + 1;

  console.time('linear');
  linearTotal += linear(maxCnt, hiddenValue);
  console.timeEnd('linear');
  console.time('binary');
  binaryTotal += binary(maxCnt, hiddenValue);
  console.timeEnd('binary');

  console.log('-------------------')
  loopCnt--;
}

console.log(`선형 탐색 - 탐색 수 (${linearTotal})`);
console.log(`이진 탐색 - 탐색 수 (${binaryTotal})`);
