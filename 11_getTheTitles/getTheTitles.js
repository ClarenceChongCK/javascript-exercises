const getTheTitles = function(array) {
    let temp = [];
    for(let i = 0; i < array.length; i++) {
        temp.push(array[i].title);
    }
    return temp;
};

// Do not edit below this line
module.exports = getTheTitles;
