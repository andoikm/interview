
const isNodeValid = arr => arr.length === 0 || arr.every(node => node.hasOwnProperty("id") && node.hasOwnProperty("label"));

const isIdUnique = arr => (new Set(Object.values(arr).map(({id}) => id))).size === arr.length;

const hasDependency = arr => {
  const nodes = Object.values(arr);

  return nodes.every(node => {
    if (!node.hasOwnProperty("dependencyId")) {
      return true;
    }

    return !!nodes.find(({id}) => id === node.dependencyId);
  })
};

const isCyclic = arr => {
  if (arr.length === 0) return false;
  const visited = new Set();
  const inStack = new Set();

  function dfs(node) {
    if (inStack.has(node)) {
      // If the node is already in the current traversal stack, a cycle is found
      return true;
    }
    if (visited.has(node)) {
      // If the node is already visited and not in the current stack, no cycle
      return false;
    }

    visited.add(node);
    inStack.add(node);

    const neighbor = arr.find(item => item.id === node);
    if (neighbor && neighbor.dependencyId) {
      if (dfs(neighbor.dependencyId)) {
        return true;
      }
    }

    inStack.delete(node);
    return false;
  }

  for (const node of arr) {
    if (!visited.has(node.id) && dfs(node.id)) {
      return true;
    }
  }

  return false;
}

const validate_nodes = (arr) => {
  const valid = isNodeValid(arr);
  const unique = isIdUnique(arr);
  const cyclic = !isCyclic(arr);
  const dependency = hasDependency(arr);

  const {v, i} = arr[0];

  const isValid = [
    valid,
    unique,
    cyclic,
    dependency
  ];
  debugger;


  return isValid.every(item => item) ;
}


const data = [
  [
    {
      id: 'a',
      label: 'A',
      v: true,
      i: 1
    },
    {
      id: 'b',
      dependencyId: 'a',
      label: 'B'
    },
    {
      id: 'c',
      dependencyId: 'b',
      label: 'C'
    }
  ],
  [
    {
      id: 'a',
      dependencyId: 'b',
      label: 'A',
      v: true,
      i: 2
    },
    {
      id: 'b',
      label: 'B'
    },
    {
      id: 'c',
      dependencyId: 'b',
      label: 'C'
    }
  ],//true
  [
    {
      id: 'a',
      label: 'A',
      v: false,
      i: 3
    },
    {
      label: 'B'
    },
    {
      id: 'c',
      label: 'C'
    }
  ],//false
  [
    {
      id: 'a',
      label: 'A',
      v: false,
      i: 4
    },
    {
      id: 'b'
    },
    {
      id: 'c',
      label: 'C'
    }
  ],//false
  [
    {
      id: 'a',
      label: 'A',
      v: false,
      i: 5
    },
    {
      id: 'b',
      label: "B"
    },
    {
      id: 'a',
      label: 'another A'
    }
  ],//false
  [
    {
      id: 'a',
      label: 'A',
      v: false,
      i: 6
    },
    {
      id: 'b',
      dependencyId: 'I-am-not-equal-to-any-id',
      label: "B"
    },
    {
      id: 'c',
      label: 'C'
    }
  ],//false
  [
    {
      id: 'a',
      dependencyId: 'c',
      label: 'A',
      v: false,
      i: 7
    },
    {
      id: 'b',
      dependencyId: 'a',
      label: "B"
    },
    {
      id: 'c',
      dependencyId: 'b',
      label: 'C'
    }
  ],//false
  [
    {
      id: 'a',
      dependencyId: 'b',
      label: 'A',
      v: false,
      i: 8
    },
    {
      id: 'b',
      dependencyId: 'a',
      label: "B"
    }
  ],//false
  [
    {
      id: 'a',
      label: 'A',
      v: false,
      i: 9
    },
    {
      id: 'b',
      dependencyId: 'b',
      label: "B"
    },
    {
      id: 'c',
      label: 'C'
    }
  ]//false
];

data.forEach(validate_nodes)



// function customPromise(callbackFunction) {
//   let state = 'pending';
//   let value = null;
//   let errorCallback = null;
//   let successCallBack = null;
//
//   function resolve(result) {
//     if (state === 'pending') {
//       state = 'fulfilled';
//       value = result;
//       executeCallback();
//     }
//   }
//
//   function reject(error) {
//     if (state === 'pending') {
//       state = 'rejected';
//       value = error;
//       executeCallback();
//     }
//   }
//
//   function then(onSuccess, onError) {
//     if (state === 'fulfilled') {
//       onSuccess(value);
//     } else if (state === 'rejected') {
//       onError(value);
//     } else {
//       successCallBack = onSuccess;
//       errorCallback = onError;
//     }
//     return customPromise(function() {});
//   }
//
//   function executeCallback() {
//     if (state === 'fulfilled') {
//       errorCallback = null; // Reset errorCallback if the promise is fulfilled
//     }
//     if (state === 'fulfilled' && errorCallback === null) {
//       // If there is no error callback, execute the success callback
//       console.log("Executing success callback");
//       successCallBack(value);
//     } else if (state === 'rejected' && errorCallback) {
//       // If there is an error callback, execute it
//       console.log("Executing error callback");
//       errorCallback(value);
//     }
//   }
//
//   callbackFunction(resolve, reject);
//
//   return {
//     then: then,
//     catch: function(onError) {
//       errorCallback = onError;
//       executeCallback();
//     }
//   };
// }
//
// // Example usage:
//
// function asyncTask() {
//   return customPromise(function(resolve, reject) {
//     setTimeout(function() {
//      // resolve("resolve");
//       reject("Task failed");
//     }, 1000);
//   });
// }
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
