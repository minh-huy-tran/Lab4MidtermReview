
import { squareFeetToAcres } from "../src/Acres.js";

describe ("Conversion of squareFeetToAcres", function(){

    it("tests 43560", function (){
        let acres = squareFeetToAcres(43560);
        expect(acres).toBe(1);
    });

    it("tests 87120", function (){
        let acres = squareFeetToAcres(87120);
        expect(acres).toBe(2);
    });

     it("tests 21780", function (){
        let acres = squareFeetToAcres(21780);
        expect(acres).toBe(0.5);
    });
})