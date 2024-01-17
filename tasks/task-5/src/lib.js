//@TODO   Write code here to make `npm test` command pass

// export ...

const isEmpty = arr => arr.length === 0;

const isNodeValid = arr => arr.every(node => node.hasOwnProperty("id") && node.hasOwnProperty("label"));

const isIdUnique = arr => (new Set(Object.values(arr).map(({id}) => id))).size === arr.length;

const hasDependency = arr => {
  const nodes = Object.values(arr);

  return nodes.every(node => {
    if (!node.hasOwnProperty("dependencyId")) {
      return true;
    }

    return !!nodes.find(({id}) => id === node.dependencyId);
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
    isIdUnique(arr),
    !isCyclic(arr),
    hasDependency(arr)
  ];

  return validationArr.every(item => item) ;
};





