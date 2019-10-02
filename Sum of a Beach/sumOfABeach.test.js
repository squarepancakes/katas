const sumOfABeach = require('./sumOfABeach')

describe("number of times, sun, water, fish and sand appear", () => {
   describe("lowercase", () => {
       
       it("should return 1", () => {
           expect(sumOfABeach("water")).toBe(1)
        })
        it("should return 2", () => {
            expect(sumOfABeach("sunwater")).toBe(2)
        })
        it("should return 3", () => {
            expect(sumOfABeach("sunwaterfish")).toBe(3);
        })
        it("should return 4", () => {
            expect(sumOfABeach("sunwaterfishsand")).toBe(4);
        })
    })

    describe("uppercase", () => {
        it("should return 1", () => {
            expect(sumOfABeach("WATER")).toBe(1)
        })
        it("should return 2", () => {
            expect(sumOfABeach("SUNWATER")).toBe(2)
        })
    })

    describe("multiples of sun, water, sand and fish", () => {
        it("should return 2", ()=> {
            expect(sumOfABeach("waterwater")).toBe(2);
        })

        it("should return 3", ()=> {
            expect(sumOfABeach("waTerwatErSuN")).toBe(3);
        })
        it("should return 1", () => {
            expect(sumOfABeach("WAtErSlIde")).toBe(1);
        })
        it("should return 3", () => {
            expect(sumOfABeach("GolDeNSanDyWateRyBeaChSuNN")).toBe(3);
        })
    })
})