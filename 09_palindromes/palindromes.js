const palindromes = function (words) {
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    const newString = words.replace(regex,'').replaceAll(' ','');
    const length = newString.length;
    const constant = newString.toLowerCase();
    for(let i = 0; i < length; i++) { 
        if(constant.charAt(i) != constant.charAt(length - 1 - i)) {
            return false; 
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
