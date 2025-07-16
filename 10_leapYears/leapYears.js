const isCentury = year => { return year%100 === 0}

const leapYears = function(year) {
	
	// if(isCentury(year)) {
	// 	if(year%400 === 0) {
	// 		return true;
	// 	} else { 
	// 		return false;
	// 	}
	// } else if (year % 4 === 0) {
	// 	return true;
	// } else {
	// 	return false;
	// }

	// year divisible by 100 not leap unless divisible by 400 as well
	// year divisible by 4 is leap
	
	if(isCentury(year)) {
		return year%400 === 0;
	}

	return year%4 === 0;
};

// Do not edit below this line
module.exports = leapYears;
