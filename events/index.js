"use strict";
(APP => {
  /*view*/
  const { bubbleSort, constants} = APP;
  const { ASC, DESC } = constants;

  const arr = [1,2,3,444,5,6,8,9,1,5,6];

  windowInitialText.innerText = arr;

  const addActiveClass = element => {
    const elements = document.getElementsByTagName('button');
    const len = elements.length;

    for(let i = 0; i < len; ++i) {
      elements[i].classList = '';
    }

    if(element){
      element.classList += 'active';
    }
  }

  runBtnAsc.addEventListener('click', () => {
    const result = APP.bubbleSort(arr, ASC);

    addActiveClass(runBtnAsc);
    windowText.innerText = result;
  });

  runBtnDesc.addEventListener('click', () => {
    const result = APP.bubbleSort(arr, DESC);

    addActiveClass(runBtnDesc);
    windowText.innerText = result;
  });

  resetBtn.addEventListener('click', () => {
    addActiveClass();
    windowText.innerText = '';
  });

})(APP);