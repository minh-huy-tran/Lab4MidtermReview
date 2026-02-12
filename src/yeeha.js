//input 
export function yee_ha(number) {

    let result ="";

    //divisibile by 3 and 7
    if (number %3 === 0 && number %7 === 0){
        result = "Yee Ha"
    }
    //divisibile by 3 
    else if (number %3 === 0 ){
        result = "Yee"
    }
    //divisibile by 7
   else if (number %7 === 0){
        result = "Ha"
    }
    //none of the above
    else{
        result = "Nada"
    }

    return result;
}