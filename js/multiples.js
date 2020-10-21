const multiples = maxNum => {
	const arr = [];
	arr.length = maxNum - 1;
	arr.fill(0);

	return arr.map((_, i) => {
		const currentNumber = i + 1;
		const m3 = currentNumber % 3 === 0;
		const m7 = currentNumber % 7 === 0;
		let str = '';

		switch (true) {
			case m3 && m7:
				str = 'fooBar';
				break;
			case m3:
				str = 'foo';
				break;
			case m7:
				str = 'bar';
				break;
			default:
				str = currentNumber;
		}

		return str;
	}).join(' ');
};

const multiples2 = maxNum => {
	let str = '';
	for(let i = 1; i <= maxNum; ++i){
		const m3 = !(i % 3);
		const m7 = !(i % 7);

		if(m3 && m7) {
			str += ' foobar';
		} else if(m3){
			str += ' foo';
		} else if(m7) {
			str += ' barr';
		} else {
			str += ` ${i}`;
		}
	}

	return str;
};


//console.log(multiples(1000));
//console.log(multiples2(1000));

