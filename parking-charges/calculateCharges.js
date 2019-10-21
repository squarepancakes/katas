const userAndTime = {A: 5, B: 9, C: 23}

function calculateCharges(userAndTime) {
	const person = Object.keys(userAndTime);
	const parkingCharges = { User: "Fees" };
	let totalFees = 0;

	person.forEach(onePerson => {
		const time = userAndTime[onePerson];
		if (time <= 3) {
			totalFees += 2;
			return (parkingCharges[onePerson] = "$2.00");
		}
		
		if (time > 19) {
			totalFees += 10;
			return (parkingCharges[onePerson] = "$10.00");
		}
		const exceededTime = time - 3;
		const fees = (2 + Math.ceil(exceededTime) * 0.5).toFixed(2);
		totalFees += Number(fees);
		return (parkingCharges[onePerson] = `$${fees}`);
	});
	parkingCharges.Total = `$${totalFees.toFixed(2)}`;
	Object.keys(parkingCharges).forEach(function(key) {
		// console.log(key, parkingCharges[key]);
	});
	return parkingCharges;
}


calculateCharges(userAndTime);

module.exports = calculateCharges;
