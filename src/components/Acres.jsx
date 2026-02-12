import {
    Text,
    View, 
}from'react-native'; 
import { squareFeetToAcres } from '../Acres.js';
export function Acres({ squareFeet}) {
    //processing
    let acres = squareFeetToAcres(squareFeet);
    //output
    return(
        <View>
            <Text> squareFeetToAcres({squareFeet})returned{Acres} </Text>
        </View>
    );
}