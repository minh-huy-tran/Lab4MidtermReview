//input square metres cut per minute 
export function lawnMowingTime(width, length, ratePerMinute){

    // processisng 
    let area = width * length;
    let minutes = area / ratePerMinute;

    //output 
    return minutes;
}