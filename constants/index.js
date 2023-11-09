"use strict";
(APP => {
  const ASC = 'asc';
  const DESC = 'desc';
  const PROMISE_STATUS = {
    PENDING: "pending",
    FUL_FILLED: "fulfilled",
    REJECTED: "rejected",
  };
  const constants = {
    ASC,
    DESC,
    PROMISE_STATUS
  };

  Object.defineProperty(APP, 'constants', {
    value: constants,
    writable: false,
    enumerable: false,
    configurable: false,
  });
})(APP);
