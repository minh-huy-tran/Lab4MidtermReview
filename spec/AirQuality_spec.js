import { airQuality } from "../src/AirQuality.js";
describe("Calculations of airQuality", function(){

    it("tests Good", function(){
        let result = airQuality(25);
        expect (result).toBe("Good");
    });

     it("tests Moderate", function(){
        let result = airQuality(75);
        expect (result).toBe("Moderate");
    });

     it("tests Unhealthy for Sensitive Groups", function(){
        let result = airQuality(125);
        expect(result).toBe("Unhealthy for Sensitive Groups");
    });
     it("tests Unhealthy", function(){
        let result = airQuality(175);
        expect (result).toBe("Unhealthy");
    });
     it("tests Very Unhealthy", function(){
        let result = airQuality(250);
        expect (result).toBe("Very Unhealthy");
    });
     it("tests Hazardous", function(){
        let result = airQuality(350);
        expect (result).toBe("Hazardous");
    });
})