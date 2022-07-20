const sumAll = function(number1, number2) {
    if (!Number.isInteger(number1) || !Number.isInteger(number2)) {
        return "ERROR";
    } else if (number1 <= 0 || number2 <= 0) {
        return "ERROR";
    } else {
        let large;
        let small;
        let sum = 0;

        if (number1 > number2) {
            large = number1;
            small = number2;
        } else {
            large = number2;
            small = number1;
        }

        for (let i = small; i <= large; i ++) {
            sum += i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
