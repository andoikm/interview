class CustomPromise {
  constructor(executor) {
    this.state = 'pending';
    this.value = undefined;
    this.error = undefined;
    this.callbacks = [];

    const resolve = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled';
        this.value = value;
        this.callbacks.forEach((callback) => {
          callback.onFulfilled(value);
        });
      }
    };

    const reject = (error) => {
      if (this.state === 'pending') {
        this.state = 'rejected';
        this.error = error;
        this.callbacks.forEach((callback) => {
          callback.onRejected(error);
        });
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    return new CustomPromise((resolve, reject) => {
      const handleCallback = (callback, value, error) => {
        try {
          const result = callback(value);
          resolve(result);
        } catch (err) {
          reject(err);
        }
      };

      if (this.state === 'fulfilled') {
        handleCallback(onFulfilled, this.value);
      } else if (this.state === 'rejected') {
        handleCallback(onRejected, undefined, this.error);
      } else {
        this.callbacks.push({
          onFulfilled: (value) => handleCallback(onFulfilled, value),
          onRejected: (error) => handleCallback(onRejected, undefined, error),
        });
      }
    });
  }

  catch(onRejected) {
    return this.then(undefined, onRejected);
  }
}
