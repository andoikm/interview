const callback = element => {
  const { clientHeight: defaultHeight } = element;

	return e => {
		const { currentTarget } = e;
		const clientHeight = currentTarget.clientHeight;

		if (defaultHeight < clientHeight){
			element.style.height = `${defaultHeight}px`;
		} else {
			element.style.height =  `${defaultHeight + 2}px`;
		}
	}
};

const element = document.getElementById('footer');
element.addEventListener('click', callback(element));