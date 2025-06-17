const palindromes = function (word) {
    word = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    word = word.toLowerCase();
    let split_word = word.split("");
    split_word = split_word.filter(letter => letter != " ")
    let palindrome = true;
    for (let i = 0; i < split_word.length; i++) {
        if (i >= split_word.length - i - 1) {
            return true;
        }
        if (split_word[i] != split_word[split_word.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
