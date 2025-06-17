const repeatString = function(word, num) {
    fullWord = ""
    if (num < 0) {
        return "ERROR";
    }
    while (num > 0) {
        fullWord += word;
        num--;
    }
    return fullWord;
};

// Do not edit below this line
module.exports = repeatString;
