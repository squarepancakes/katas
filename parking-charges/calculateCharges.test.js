const calculateCharges = require("./calculateCharges");

describe("parking charges", () => {
	describe("parking within the first 24-hours", () => {
		describe("parking within the first 3 hours", () => {
			it("should charge $2 for the first 1 hour of parking", () => {
				expect(calculateCharges({ A: 1 })).toMatchObject({A : "$2.00"});
			});

			it("should charge $2 for the first 3 hours of parking", () => {
				expect(calculateCharges({ A: 3 })).toMatchObject({A : "$2.00"});
			});
		});

		describe("parking after the first 3 hours", () => {
			it("should charge $2.50 for the first 4 hours of parking", () => {
				expect(calculateCharges({ A: 4 })).toMatchObject({A : "$2.50"});
			});

			it("should charge $8 for the first 15 hours of parking", () => {
				expect(calculateCharges({ A: 15 })).toMatchObject({A : "$8.00"});
			});

			it("should charge $10 for the first 19 hours of parking", () => {
				expect(calculateCharges({ A: 19 })).toMatchObject({A : "$10.00"});
			});

			it("should charge $10 for the first 22 hours of parking", () => {
				expect(calculateCharges({ A: 22 })).toMatchObject({A : "$10.00"});
			});
		});

		describe("parking charges of person A", () => {
			it("should return A: $2", () => {
				expect(calculateCharges({ A: 3 })).toMatchObject({A : "$2.00"});
			});
		});

		describe("parking charges of person B", () => {
			it("should return B: $2.50", () => {
				expect(calculateCharges({ B: 4 })).toMatchObject({B : "$2.50"});
			});
		});
	});

	describe("parking charges of person B and A", () => {
		it("should return {A:$2.00, B: $2.50}", () => {
			expect(calculateCharges({ A: 3, B: 4 })).toMatchObject({A : "$2.00", B: "$2.50"});
		});
		it("should return {A:$10.00, B: $2.00}", () => {
			expect(calculateCharges({ A: 20, B: 3 })).toMatchObject({A : "$10.00", B: "$2.00"});
		});
	});
	
	describe("parking charges of person B and A", () => {
		it("should return {A:$2.00, B: $2.50}", () => {
			expect(calculateCharges({ A: 3, B: 4 })).toMatchObject({A : "$2.00", B: "$2.50"});
		});
		it("should return {A:$10.00, B: $2.00}", () => {
			expect(calculateCharges({ A: 20, B: 3 })).toMatchObject({A : "$10.00", B: "$2.00"});
		});
	});
	
	describe("parking charges of person A, B and C", () => {
		it("should return {A:$2.00, B: $2.50, C: $10.00}", () => {
			expect(calculateCharges({ A: 3, B: 4, C: 20 })).toMatchObject({A : "$2.00", B: "$2.50", C: "$10.00"});
		});
		
	});
	
	describe("parking charges of person A, B, C and total", () => {
		it("should return {A:$2.00, B: $2.50, C: $10.00, Total: $14.50}", () => {
			expect(calculateCharges({ A: 3, B: 4, C: 20})).toMatchObject({A : "$2.00", B: "$2.50", C: "$10.00", Total: "$14.50"});
		});
		
	});
});
