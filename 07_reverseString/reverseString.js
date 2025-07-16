const reverseString = function(text) {
	let length = text.length;
	let newText = '';

	for(i=text.length-1; i>=0; i--) {
		newText += text[i];
	}

	return newText;
};

// Do not edit below this line
module.exports = reverseString;
