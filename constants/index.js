"use strict";
(APP => {
  const ASC = 'asc';
  const DESC = 'desc';
  const constants = {
    ASC,
    DESC,
  };

  Object.defineProperty(APP, 'constants', {
    value: constants,
    writable: false,
    enumerable: false,
    configurable: false,
  });
})(APP);