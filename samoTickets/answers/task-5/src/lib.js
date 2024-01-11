//@TODO   Write code here to make `npm test` command pass

const isEmpty = (arr) => arr.length === 0;
const hasDepIdEqualToId = (arr) => {
    for (let i =0; i < arr.length; i++) {
        if (arr[i].id === arr[i].dependencyId) {
            return true;
        }
    }
    return false;
}

const hasCircularDep = (arr) => {
    const map = {};
    arr.forEach((item) => {
        map[item.id] = item;
    });

    for (let i = 0; i < arr.length; i++) {
        if (checkRecursively(arr[i], [], map)) {
            return true;
        }
    }
    return false;
}

const checkRecursively = (item, visited, map) => {
    if (!item.dependencyId) {
        return false;
    }
    if (!map[item.dependencyId]) {
        return false;
    }
    if (visited.indexOf(item.dependencyId) !== -1) {
        return true;
    }
    return checkRecursively(map[item.dependencyId], [...visited, item.id], map);
}

const inValidDepId = (arr) => {
    const ids = arr.map((a) => a.id);
    for (let i =0; i < arr.length; i++) {
        if (arr[i].dependencyId && ids.indexOf(arr[i].dependencyId) === -1) {
            return true;
        }
    }
    return false;
}

const duplicateId = (arr) => {
    const map = {};
    for (let i =0; i < arr.length; i++) {
        if (map[arr[i].id]) {
            return true;
        }
        map[arr[i].id] = true;
    }
    return false;
}

const missingLabel = (arr) => {
    return missingProp(arr, "label")
}

const missingId = (arr) => {
    return missingProp(arr, "id")
}

const missingProp = (arr, prop) => {
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i].hasOwnProperty(prop)) {
            return true;
        }
    }
    return false;
}

export const validate_nodes = (arr) => {
    const trueChecks = [
        isEmpty
    ]

    if (trueChecks.some((check) => check(arr))) {
        return true;
    }

    const falseChecks = [
        hasDepIdEqualToId,
        hasCircularDep,
        inValidDepId,
        duplicateId,
        missingLabel,
        missingId
    ];

    return !falseChecks.some((check) => check(arr));


};