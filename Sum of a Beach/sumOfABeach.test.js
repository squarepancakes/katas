const sumOfABeach = require('./sumOfABeach')

describe("number of times, sun, water, fish and sand appear", () => {
   describe("lowercase", () => {
       
       it("should return 1 when string is water", () => {
           expect(sumOfABeach("water")).toBe(1)
        })
        it("should return 2 when string is sunwater", () => {
            expect(sumOfABeach("sunwater")).toBe(2)
        })
        it("should return 3 when string is sunwaterfish", () => {
            expect(sumOfABeach("sunwaterfish")).toBe(3);
        })
        it("should return 4 when string is sunwaterfishsand", () => {
            expect(sumOfABeach("sunwaterfishsand")).toBe(4);
        })
    })

    describe("uppercase", () => {
        it("should return 1 when string is WATER", () => {
            expect(sumOfABeach("WATER")).toBe(1)
        })
        it("should return 2 when string is SUNWATER", () => {
            expect(sumOfABeach("SUNWATER")).toBe(2)
        })
    })

    describe("when multiples of sun, water, sand and fish appear", () => {
        it("should return 2 when string is waterwater", ()=> {
            expect(sumOfABeach("waterwater")).toBe(2);
        })

        it("should return 3 when string is waTerwatErSuN", ()=> {
            expect(sumOfABeach("waTerwatErSuN")).toBe(3);
        })
        it("should return 1 when string is WAtErSlIde", () => {
            expect(sumOfABeach("WAtErSlIde")).toBe(1);
        })
        it("should return 3 hen string is wGolDeNSanDyWateRyBeaChSuNN", () => {
            expect(sumOfABeach("GolDeNSanDyWateRyBeaChSuNN")).toBe(3);
        })
    })
})