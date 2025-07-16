const removeFromArray = function(arr, ...items)  {
	const filtered = arr.filter(element => !items.includes(element));
	return filtered;
};

// Do not edit below this line
module.exports = removeFromArray;