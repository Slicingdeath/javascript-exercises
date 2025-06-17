const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
};

const multiply = function(arr) {
  return arr.reduce((mul, num) => mul * num, 1);
};

const power = function(num, power) {
  let powered_num = 1;
	while (power > 0) {
    powered_num *= num;
    power--;
  }
  return powered_num
};

const factorial = function(num) {
	let factorial = 1;
  while (num > 1) {
    factorial *= num;
    num--;
  }
  return factorial;
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
