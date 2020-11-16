"use strict";
(APP => {
  /***business logic***/
  const { ASC, DESC } = APP.constants;

  const getSortType = (arr, i, sort) => {
    const flag =  arr[i] - arr[i + 1];

    return sort === ASC
      ? flag > 0
      : flag < 0;
  }


  const swappElements = (arr, i) => {
    const temp = arr[i];

    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }

  const bubbleSort = (arr, sort) => {
    const len = arr.length;
    let swapped;

    do {
      swapped = false;
      for (let i = 0; i < len; ++i) {
        if (getSortType(arr, i, sort)) {
          swappElements(arr, i);
          swapped = true;
        }
      }
    } while (swapped);

    return arr;
  }

  /**export bubbleSort*/
  APP.ASC = ASC;
  APP.bubbleSort = bubbleSort;
})(APP);



