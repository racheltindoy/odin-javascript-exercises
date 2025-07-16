const repeatString = function(word, instances) {
	let result = '';
	
	if(instances  < 0) { return "ERROR"; }

	for(i=0; i<instances; i++) {
		result += word;
	}

	return result;
};

// Do not edit below this line
module.exports = repeatString;
