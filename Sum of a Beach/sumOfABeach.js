const sumOfABeach = string => {
	let total = 0;
	let stringLowerCase = string.toLowerCase();
	const includesWater = (stringLowerCase.match(/water/g) || []).length;
	const includesSun = (stringLowerCase.match(/sun/g) || []).length;
	const includesFish = (stringLowerCase.match(/fish/g) || []).length;
	const includesSand = (stringLowerCase.match(/sand/g) || []).length;

	total = includesWater + includesSun + includesFish + includesSand;

	return total;
};

module.exports = sumOfABeach;
