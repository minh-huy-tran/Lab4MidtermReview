import {yee_ha} from "../src/yeeha.js"
describe ("Calculation on yee_ha", function (){


     it("tests divisible by 3", function (){
        let result = yee_ha(9);
        expect(result).toBe("Yee");
    });

     it("tests divisible by  7", function (){
        let result = yee_ha(14);
        expect(result).toBe("Ha");
    });

      it("tests divisible by both 3 and 7", function (){
        let result = yee_ha(21);
        expect(result).toBe("Yee Ha");
    });

    it("tests none of the aboce", function(){
        let result = yee_ha (5);
        expect (result).toBe("Nada");
    });
})