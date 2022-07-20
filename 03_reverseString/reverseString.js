const reverseString = function(word) {
    let temp = "";
    for (i = 0; i < word.length; i++) {
        temp += word.charAt(word.length - 1 - i);
    }
    return temp;
};

// Do not edit below this line
module.exports = reverseString;
