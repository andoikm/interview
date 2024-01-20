//@TODO   Write code here to make `npm test` command pass

// export ...

const isEmpty = arr => arr.length === 0;

const isNodeValid = arr => arr.every(obj => obj.hasOwnProperty("id") && obj.hasOwnProperty("label"));

const allHasId = arr => arr.every(obj => obj.hasOwnProperty("id"));

const isIdUnique = arr => (new Set(arr.map(({id}) => id))).size === arr.length;

const hasDependency = arr => {
  return arr.every(obj => {
    if (!obj.hasOwnProperty("dependencyId")) {
      return true;
    }

    return !!arr.find(({id}) => id === obj.dependencyId);
  });
};

const isCyclic = arr => {
  const map = arr.reduce((acc, curr) => ({
    ...acc,
    [curr.id]: curr
  }), {});

  for (const item of arr) {
    if (checkRecursively(item, [], map)) {
      return true;
    }
  }
  return false;
};

const checkRecursively = (item, visited, map) => {
  if (!item.dependencyId || !map[item.dependencyId]) {
    return false;
  }

  if (visited.indexOf(item.dependencyId) !== -1) {
    return true;
  }
  return checkRecursively(map[item.dependencyId], [...visited, item.id], map);
};

export const validate_nodes = (arr) => {
  if(isEmpty(arr)) {
    return true;
  }

  const validationArr = [
    isNodeValid(arr),
    allHasId(arr),
    isIdUnique(arr),
    !isCyclic(arr),
    hasDependency(arr)
  ];

  return validationArr.every(item => item) ;
};