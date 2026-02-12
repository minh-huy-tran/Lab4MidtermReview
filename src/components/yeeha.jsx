import{
    Text,
    View,
}from 'react-native';

import{ yee_ha } from '../yeeha.js';

export function Yeeha({number}){

    //processing
    let result = yee_ha(number);

    //output
    return(
        <View>
            <Text>
                yee_ha({number}) returned {result}
            </Text>
        </View>
    )
}