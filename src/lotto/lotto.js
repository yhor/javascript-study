function solution(lottos, win_nums) {
    var answer = [];
    win_nums.push(0);
    
    let random_cnt = 0;
    const result = lottos.filter(x => {
        if (x === 0) random_cnt++;
        return win_nums.includes(x) ? 1 : 0;
    }).length;

    answer[0] = result;
    answer[1] = result - random_cnt;

    return answer.map(y => {
        if (y === 6) {
            return 1;
        } else if (y === 5) {
            return 2;
        } else if (y === 4) {
            return 3;
        } else if (y === 3) {
            return 4;
        } else if (y === 2) {
            return 5;
        } else {
            return 6;
        }
    });
}


let dd = solution([0, 0,3,4,5,6], [6,7,8,9,10,11]);

console.log(dd);