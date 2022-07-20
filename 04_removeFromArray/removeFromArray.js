const removeFromArray = function() {
    let temp = [];
    for (let i = 0; i < arguments[0].length; i++) {
        temp.push(arguments[0][i]);
        for (let j = 1; j < arguments.length; j++) {
            if (arguments[0][i] === arguments[j]) {
                temp.pop();
                break;
            }
        }
    }
    return temp;
};

// Do not edit below this line
module.exports = removeFromArray;
