import { lawnMowingTime } from "../src/Lawn.js";
describe("Calculations of lawnMowingTime", function (){

    it("tests small lawn", function (){
        let minutes = lawnMowingTime(5,4,5)
        expect (minutes).toBe(4);
    });
      it("tests square lawn", function (){
        let minutes = lawnMowingTime(10,10,10)
        expect (minutes).toBe(10);
    });
      it("tests medium lawn", function (){
        let minutes = lawnMowingTime(12,5,6)
        expect (minutes).toBe(10);
    });
})