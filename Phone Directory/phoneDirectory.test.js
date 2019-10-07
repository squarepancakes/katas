const phone = require("./phoneDirectory");

// describe("phone directory", () => {
// 	xit("should return a string of name and num", () => {
// 		expect(phone("Jack", 123)).toBe("Jack 123");
// 	});
// 	xit("should return format Phone => num, Name => name", () => {
// 		expect(phone("<Jack>", 123)).toBe("Phone => 123, Name => Jack");
// 	});
// 	it("should return name J Steeve inside string", () => {
// 		expect(phone("/123 156 Alphand_St. <J Steeve>\n", 123)).toBe(
// 			"Phone => 123, Name => J Steeve, Address =>  J Steeve inside string", () => {
//                 expect(phone("/123 156 Alphand_St."
// 		);
// 	});
// });

describe("phone directory", () => {
	it("should return a string of name and number", () => {
		expect(phone("<Jack>", "+123")).toBe("Phone => +123, Name => Jack");
	});
	it("should return a string of name and number", () => {
		expect(phone("<Jack> +123", "+123")).toBe("Phone => +123, Name => Jack");
	});
	describe("more than one person", () => {
		it("should return an error if there are many people for a number", () => {
			expect(phone("<Jack> <Jill> +123", "+123")).toBe(
				"Error => Too many people: nb"
			);
		});
	});
	describe("number does not exist", () => {
		it("should return an error if the number does not exist", () => {
			expect(phone("<Jack> <Jill> +124", "+123")).toBe(
				"Error => Not found: nb"
			);
		});
	});
});
