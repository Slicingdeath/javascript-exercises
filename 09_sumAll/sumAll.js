const sumAll = function(firstNum, lastNum) {
    let sum = 0;
    if (firstNum < 0 || lastNum < 0 || !Number.isInteger(firstNum) || !Number.isInteger(lastNum)) {
        return 'ERROR';
    }
    if (lastNum < firstNum) {
        let temp = firstNum;
        firstNum = lastNum;
        lastNum = temp;
    }
    for (let i = firstNum; i <= lastNum; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
