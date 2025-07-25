const palindromes = function (input) {
	let reversedLetters = '';
  	let originalLetters = '';

	for(let i = input.length-1; i >= 0 ; i--) {
	if (/[a-zA-Z0-9]/.test(input[i])) {
	  reversedLetters += input[i].toLowerCase();
	}
	}

  for(let i = 0; i <= input.length-1 ; i++) {
	if (/[a-zA-Z0-9]/.test(input[i])) {
	  originalLetters += input[i].toLowerCase();
	}
}

  if(reversedLetters == originalLetters) {
	return true;
  } else {return false;}
};

// Do not edit below this line
module.exports = palindromes;
