import{
    Text, 
    View, 
} from 'react-native';
import { lawnMowingTime } from '../Lawn.js';

//input 
export function Lawn({ width, length, ratePerMinute }) {

    //processing 
    let minutes = lawnMowingTime(width, length, ratePerMinute);

    //output
    return (
        <View>
            <Text>
                lawnMowingTime({width}, {length}, {ratePerMinute}) returned {minutes}
            </Text>
        </View>
    );


}