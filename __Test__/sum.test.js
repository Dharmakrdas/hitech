import sum from "../src/sum";

describe("Should be call sum method",()=>{
    test("Passing two param in sum method",()=>{
        const result = sum(2,5);
        expect(result).toBe(7);
    })
})