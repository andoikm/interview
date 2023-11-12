function customPromise(callbackFunction) {
  let state = 'pending';
  let value = null;
  let errorCallback = null;
  let successCallBack = null;

  function resolve(result) {
    if (state === 'pending') {
      state = 'fulfilled';
      value = result;
      executeCallback();
    }
  }

  function reject(error) {
    if (state === 'pending') {
      state = 'rejected';
      value = error;
      executeCallback();
    }
  }

  function then(onSuccess, onError) {
    if (state === 'fulfilled') {
      onSuccess(value);
    } else if (state === 'rejected') {
      onError(value);
    } else {
      successCallBack = onSuccess;
      errorCallback = onError;
    }
    return customPromise(function() {});
  }

  function executeCallback() {
    if (state === 'fulfilled') {
      errorCallback = null; // Reset errorCallback if the promise is fulfilled
    }
    if (state === 'fulfilled' && errorCallback === null) {
      // If there is no error callback, execute the success callback
      console.log("Executing success callback");
      successCallBack(value);
    } else if (state === 'rejected' && errorCallback) {
      // If there is an error callback, execute it
      console.log("Executing error callback");
      errorCallback(value);
    }
  }

  callbackFunction(resolve, reject);

  return {
    then: then,
    catch: function(onError) {
      errorCallback = onError;
      executeCallback();
    }
  };
}

// Example usage:

function asyncTask() {
  return customPromise(function(resolve, reject) {
    setTimeout(function() {
     // resolve("resolve");
      reject("Task failed");
    }, 1000);
  });
}
//
// asyncTask()
// .then((result) => {
//   debugger;
//   return 55;
// })
// .then((result) => {
//   debugger;
// })
// .catch((error) => {
//   debugger;
// });
