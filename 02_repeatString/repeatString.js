const repeatString = function(word, number) {
    let temp = "";
    if (number < 0) {
        return "ERROR"
    }
    
    while (number > 0) {
        temp += word;
        number--;
    }
    return temp;
};

// Do not edit below this line
module.exports = repeatString;
