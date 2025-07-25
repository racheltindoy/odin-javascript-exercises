const fibonacci = function(num) {
	let a = 1;
	let lastNum = 0;
	let sum = 0;
	let arr = [];

	if(num < 0) { return "OOPS"; }
	
	arr.push(lastNum);
	for(let i = 0; i <= num; i++) {
		sum = lastNum + a;
		a = lastNum;
		lastNum = sum;
		arr.push(sum);
	}

  return arr[num];
};

// Do not edit below this line
module.exports = fibonacci;
