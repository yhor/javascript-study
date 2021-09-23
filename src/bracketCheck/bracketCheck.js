/**
 * 괄호 알맞게 체크하기
 * 예시 
 * ()[]{} => true
 * ([{}]) => true
 * {[((})]} => false
 * */


function solution(x) {
  if (x.length % 2) return false;
  const temp = {
    '(': ')',
    '{': '}',
    '[': ']',
  }

  const mock = x.split('');

  while (mock.length) {
    const key = mock.shift();

    if (temp[key] === mock[0]) {
      mock.shift();
    } else {
      if (temp[key] !== mock.pop()) return false;
    }
  }

  return true;
}