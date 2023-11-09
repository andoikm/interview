function customPromise(callbackFunction) {
  let state = 'pending';
  let value = null;

  function resolve(result) {
    state = 'fulfilled';
    value = result;
    executeCallback();
  }

  function reject(error) {
    state = 'rejected';
    value = error;
    executeCallback();
  }

  let successCallback = null;
  let errorCallback = null;

  function then(onSuccess, onError) {
    if (state === 'fulfilled') {
      onSuccess(value);
    } else if (state === 'rejected') {
      onError(value);
    } else {
      successCallback = onSuccess;
      errorCallback = onError;
    }
    return customPromise(function() {});
  }

  function executeCallback() {
    if (state === 'fulfilled' && successCallback) {
      successCallback(value);
    } else if (state === 'rejected' && errorCallback) {
      errorCallback(value);
    }
  }

  callbackFunction(resolve, reject);

  return {
    then: then
  };
}

// Example usage:

function asyncTask() {
  return customPromise(function(resolve, reject) {
    setTimeout(function() {
      const randomValue = Math.random();
      if (randomValue >= 0.5) {
        resolve(randomValue);
      } else {
        reject("Task failed");
      }
    }, 1000);
  });
}

asyncTask()
.then(function(result) {
  console.log("Task completed successfully with value: " + result);
})
.then(function() {
  console.log("Chained callback");
})
.then(null, function(error) {
  console.error("Task failed with error: " + error);
});
