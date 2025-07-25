const findTheOldest = function(people) {
	let currentDate = new Date();
	let currentYear = currentDate.getFullYear();
	let people2 = [];

	people.forEach(person => {
		if (!('yearOfDeath' in person)) {
			person.yearOfDeath = currentYear;
			people2.push(person);
		} else {people2.push(person)}
	});

	const sorted = people2.sort((a, b) => 
		(b.yearOfDeath - b.yearOfBirth) - 
		(a.yearOfDeath - a.yearOfBirth)
		
	);

	return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
