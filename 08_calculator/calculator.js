const add = function(first, second) {
	return first + second;
};

const subtract = function(first, second) {
	return first - second;
};

const sum = function(array) {
	let sum = 0;
  for(let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const multiply = function(array) {
  let base = 1;
  for(let i = 0; i < array.length; i++) {
    base *= array[i];
  }
  return base;
};

const power = function(base, multiplier) {
	let temp = 1;
  for(let i = 0; i < multiplier; i++) {
    temp *= base;
  }
  return temp;
};

const factorial = function(i) {
  if (i == 0) {
    return 1;
  }
  let temp = 1;
	for( let j = 1; j <= i; j++) {
    temp *= j
  }
  return temp;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
