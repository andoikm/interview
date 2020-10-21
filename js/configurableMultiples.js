const fooBar = configs => {
	let str = '';
	let len = configs.length - 1;

	for (let i = 1; i < 1000; ++i) {
		let flag = '';
		for (let j = len; j > -1; --j) {
			const [swapped, callback] = configs[j];

			if (callback(i)) {
				flag = swapped;
				break;
			}
		}

		str += ` ${flag ? flag : i}`;
	}

	return str;
};

const fooBarConfig = [
	[`foo`, i => i % 3 === 0],
	[`bar`, i => i % 7 === 0],
	[`fooBar`, i => i % 21 === 0],
];

const gregorianConfig = [
	['leap', i => i % 400 === 0 || (i % 4 === 0 && i % 100 !== 0)],
];

const abraCadabraConfig = [
	['abra', i => i.toString() === i.toString().split('').reverse().join('')],
	['cadabra', i => i.toString() !== i.toString().split('').reverse().join('')],
];

//console.log('fooBarConfig', fooBar(fooBarConfig));
//console.log('gregorianConfig', fooBar(gregorianConfig));
//console.log('abraCadabraConfig', fooBar(abraCadabraConfig));