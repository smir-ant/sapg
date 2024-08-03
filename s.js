function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    function objectsEqual(obj1, obj2) {
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);

        if (keys1.length !== keys2.length) {
            return false;
        }

        for (const key of keys1) {
            if (obj1[key] !== obj2[key]) {
                return false;
            }
        }

        return true;
    }

    for (let i = 0; i < arr1.length; i++) {
        const obj1 = arr1[i];
        const obj2 = arr2[i];

        if (!objectsEqual(obj1, obj2)) {
            return false;
        }
    }

    return true;
}

// Пример использования
const arr1 = [{"a": 1, "aa": 11}, {"bb": 22, "b": 2}];
const arr2 = [{"aa": 11, "a": 1}, {"bb": 22, "b": 2}];

console.log(arraysEqual(arr1, arr2)); // true