const STATES = {
  PENDING: "pending",
  FUL_FILLED: "fulfilled",
  REJECTED: "rejected",
};

class Promise {
  constructor(executor){
    this.state = STATES.PENDING;
    this.value = undefined;
    this.error = undefined;
    this.callbacks = [];

    const resolve = (value) => {
      if(this.state === STATES.PENDING) {
        this.state = STATES.FUL_FILLED;
        this.value = value;
        this.callbacks.forEach(callback => {
          callback.onFulfilled(value);
        });
      }
    };

    const reject = (error) => {
      if(this.state === STATES.PENDING) {
        this.state = STATES.REJECTED;
        this.error = error;
        this.callbacks.forEach(callback => {
          callback.onRejected(error);
        });
      }
    };

    try {
     executor(resolve, reject);
    }catch(e) {
      reject(e);
    }
  }

  then(onFulfilled, onRejected) {
    return new Promise((resolve, reject) => {
      const handleCallBack = (callback, value, err) => {
        try {
           const result = callback(err || value);
           resolve(result);
        }catch(e) {
          reject(this.error || e);
        }
      };

      if (this.state === STATES.FUL_FILLED) {
        handleCallBack(onFulfilled, this.value);
      } else if (this.state === STATES.REJECTED) {
        handleCallBack(onRejected, undefined, this.error);
      } else {
        this.callbacks.push({
          onFulfilled: value => handleCallBack(onFulfilled, value),
          onRejected: error => handleCallBack(onRejected, undefined, error)
        })
      }
    });
  }

  catch(onReject) {
    return this.then(undefined, onReject);
  }
}


new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolve");
   // reject("reject");
  }, 1000);

  setTimeout(() => {
   // reject("reject");
  }, 1000);
}).then(scc => {
  debugger;
  return 333;
}).then(then2 => {

})
.catch(err => {
  debugger;
})
