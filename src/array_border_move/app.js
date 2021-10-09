function solution(rows, columns, queries) {
	var answer = [];

	let dummy = [];
	let i = 1;
	for (let x = 0; x < rows; x++) {
		dummy[x] = [];
		for (let y = 0; y < columns; y++) {
			dummy[x].push(i++);
		}
	}

	queries.forEach(move => {
		let x = move[3] - move[1];
		let y = move[2] - move[0];
		let a = [];
		let b = [];
		let c = [];
		let d = [];

		let i = 0;

		for(i; i <= x; i++) {
			a.push(dummy[move[0]-1][move[1]-1 + i]);
		}

		for(let j = 1 ; j < y; j++) {
			d.unshift(dummy[move[0]-1 + j][move[1]-1]);
			b.push(dummy[move[0]-1 + j][move[1]-1 + x]);
		}

		for(i; i > 0; i--) {
			c.unshift(dummy[move[2]-1][move[3] - i]);
		}


		let getData = [...a, ...b, ...c, ...d];
		getData.unshift(getData.pop());
		answer.push(Math.min(...getData));

		//다시 정렬
		for(i; i <= x; i++) {
			dummy[move[0]-1][move[1]-1 + i] = getData.shift();
		}

		for(let j = 1 ; j < y; j++) {
			dummy[move[0]-1 + j][move[1]-1] = getData.pop();
			dummy[move[0]-1 + j][move[1]-1 + x] = getData.shift();
		}

		for(i; i > 0; i--) {
			dummy[move[2]-1][move[3] - i] = getData.pop();
		}
	});

	return answer;
}

solution(6, 6, [[2, 2, 5, 4], [3, 3, 6, 6], [5, 1, 6, 3]]);