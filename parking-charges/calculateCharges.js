function calculateCharges(userAndTime) {
	const users = Object.keys(userAndTime);
	const parkingCharges = { User: "Fees" };
	const minFees = 2.00;
	const minHours = 3.00;
	const hourlyFeeAfterFirst3Hours = 0.5;
	const maxFees = 10.0;
	const maxHours = (maxFees - minFees) / hourlyFeeAfterFirst3Hours + minHours;
	let totalFees = 0;

	users.forEach(user => {
		const time = userAndTime[user];

		if (time <= minHours) {
			totalFees += minFees;
			return (parkingCharges[user] = `$${minFees.toFixed(2)}`);
		}
		if (time > maxHours) {
			totalFees += maxFees;
			return (parkingCharges[user] = `$${maxFees.toFixed(2)}`);
		}
		const exceededTime = time - 3;
		const fees = (2 + Math.ceil(exceededTime) * 0.5).toFixed(2);
		totalFees += Number(fees);
		return (parkingCharges[user] = `$${fees}`);
	});
	parkingCharges.Total = `$${totalFees.toFixed(2)}`;
	Object.keys(parkingCharges).forEach(function(key) {
		console.log(key, parkingCharges[key]);
	});
	return parkingCharges;
}

module.exports = calculateCharges;
