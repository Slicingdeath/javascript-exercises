const removeFromArray = function(arr, ...toRemove) {
    let remove = false;
    let filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < toRemove.length; j++) {
            if (arr[i] === toRemove[j]) {
                remove = true;
                break;
             }
        }
        if (!remove) {
            filteredArr.push(arr[i]);
        }
        remove = false;
    }
    return filteredArr;
};

// Do not edit below this line
module.exports = removeFromArray;
