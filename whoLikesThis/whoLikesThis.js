function whoLikesThis(names) {
	const numberOfNames = names.length;
	let someone = "no one";
	let likes = numberOfNames < 2 ? "likes" : "like";

	if (numberOfNames === 1) {
		someone = `${names[0]}`;
	} else if (numberOfNames === 2) {
		someone = `${names[0]} and ${names[1]}`;
	} else if (numberOfNames === 3) {
		someone = `${names[0]}, ${names[1]} and ${names[2]}`;
	} else if (numberOfNames >= 4) {
		someone = `${names[0]}, ${names[1]} and ${numberOfNames - 2} others`;
	}
	return `${someone} ${likes} this`;
}

module.exports = whoLikesThis;
