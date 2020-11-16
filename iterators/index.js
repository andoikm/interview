const arr = [1, 2, 3, 4];

const reducer = (accumulator, currentValue) => {
  return {...accumulator, [currentValue]: currentValue}
};
arr.reduce(reducer, {});
//{ 1:1, 2:2, ... , 4:4 }

const arrSumReducer = (sum, current) => {
  return sum += current;
}
arr.reduce(arrSumReducer, 0);
//10

const arr1 = [1,2,3,4];

arr1.every(val => val < 5) //true
arr1.every(val => val < 4) //false
arr1.some(val => val === 2) //true
arr1.some(val => val === 0) //false