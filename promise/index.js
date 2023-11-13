const first = (value, callback) => {
  callback(value + 2, false);
}

const second = (value, callback) => {
  callback(value + 2, false);
}

const third = (value, callback) => {
  callback(value + 2, false);
}

first(2, (firstResult, err) => {
  if( !err ) {
    second(firstResult, (secondResult, err) => {
      if( !err ) {
        third(secondResult, (thirdResult, err) => {
          if( !err ) {
            //console.log(thirdResult);
          }
        });
      }
    });
  }
});

const promise = new Promise((resolve, reject) => resolve(2));

// promise
//   .then(value => value + 2)
//   .then(value => value + 2)
//   .then(value => value + 2)
//   .then(value => {
//     console.log(value);
//   });
