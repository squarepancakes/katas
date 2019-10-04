const assert = require("assert");

// Write a function that takes in a query object and returns the query string

function parseQueryToString(query) {
	if (Object.entries(query).length === 0) {
		return "No queries";
	}
	const keys = Object.keys(query);
	const pairs = keys.map(key => {
		return `${key}=${query[key]}`;
	});
	let str = `?${pairs.join("&")}`;
	return str;
}

const query = { author: "Alice", title: "Travel" };
const actual = parseQueryToString(query);
assert.strictEqual(actual, "?author=Alice&title=Travel");

const query2 = { author: "Alice", title: "Travel", isbn: "123" };
const actual2 = parseQueryToString(query2);
assert.strictEqual(actual2, "?author=Alice&title=Travel&isbn=123");