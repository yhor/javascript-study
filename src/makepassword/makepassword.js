const pattens = [
	/[a-z]/,
	/[A-Z]/,
	/[0-9]/,
	/[~!@#$%^&*_+=`|(){}[\]:;'"<>,.\?\/]/,
]

const makeOne = (() => {
	const chars = [65, 26];
	const CHARS = [97, 26];
	const number = [48, 10];
	const sym = [
		'~', '!', '@', '#', '$',
		'%', '^', '&', '*', '_',
		'+', '=', '`', '|', '(',
		')', '{', '}', '[', ']',
		':', ';', "'", '"', '<',
		'>', ',', ".", '?', '/',
	];
	const summary = [
		chars,
		CHARS,
		number,
		[
			sym,
			sym.length	
		]
	]

	return function (type) {
		const box = summary[type];
		const random = Math.floor(Math.random() * box[1]);

		return type !== 3 ? String.fromCharCode(box[0] + random) : box[0][random];
	}
})();

/**
 * 비밀번호 생성
 * @param {*} charsQuantity 비밀번호 길이
 * @param {*} minimun  최소길이
 * @returns 
 */
function passwordGenerator(charsQuantity, minimun) {
	if (!Number.isInteger(charsQuantity)) throw new Error('Not a Integer');
	if (charsQuantity < minimun) throw new Error(`Minimum length allowed: ${minimun}`);	
	
	let result = '';
	let check = 0;

	while (check < 3) {
		result = '';
		for (let i = 0; i < charsQuantity; i++) {
			const value = makeOne(Math.floor(Math.random() * 4));
			result += +value;
		}
		check = (pattens.filter(pt => pt.test(result))).length;
	}
	return result;
}

module.exports = {
	passwordGenerator
};