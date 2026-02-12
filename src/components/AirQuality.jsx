import{
    Text,
    View,
}from 'react-native';

import {airQuality} from '../AirQuality.js';

//input API 
export function AirQuality({aqi}) {

    //processing
    let quality = airQuality(aqi);

    //output 
    return(
        <View>
            <Text>
                airQuality({aqi}) returned {quality}
            </Text>
        </View>
    );
}