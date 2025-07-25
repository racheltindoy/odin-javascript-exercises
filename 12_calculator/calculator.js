const add = function(val1, val2) {
	return val1 + val2;
};

const subtract = function(val1, val2) {
	return val1 - val2;
};

const sum = function(arr) {
	if(arr.length === 0) {
    return 0;
  } else {
    return arr.reduce((total, num) => total + num, 0)
  }
};

const multiply = function(arr) {
  if(arr.length === 0) {
    return 0;
  } else {
    return arr.reduce((product, num) => product * num)
  }
};

const power = function(val, pow) {
  let arr = [];

  for(let i = 0; i  < pow; i++) {
    arr.push(val);
  }

  return arr.reduce((acc, curr) => {
    return acc *= curr;
  });

};

const factorial = function(val) {
    if(val == 0) {return 1}

    let acc = 1;

    for(let i = val; i > 0; i--) {
      acc *= i;
    
    }

    return acc;
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
