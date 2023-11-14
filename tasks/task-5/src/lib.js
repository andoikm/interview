//@TODO   Write code here to make `npm test` command pass

// export ...



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
  if (arr.length === 0) {
    return false;
  }

  const stack = new Set();
  const visited = new Set();

  function dfs(id) {
    if (stack.has(id)) {
      return true;
    }
    if (visited.has(id)) {
      return false;
    }

    visited.add(id);
    stack.add(id);

    const neighbor = arr.find(item => item.id === id);
    if (neighbor && neighbor.dependencyId) {
      if (dfs(neighbor.dependencyId)) {
        return true;
      }
    }

    stack.delete(id);
    return false;
  }

  for (const node of arr) {
    if (!visited.has(node.id) && dfs(node.id)) {
      return true;
    }
  }

  return false;
}

export const validate_nodes = (arr) => {

  const validationArr = [
    isNodeValid(arr),
    isIdUnique(arr),
    !isCyclic(arr),
    hasDependency(arr)
  ];


  return validationArr.every(item => item) ;
};





