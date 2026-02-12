import {Hello} from './Hello.jsx';
import { SnowRemoval } from './SnowRemoval.jsx';
import {Acres} from './Acres.jsx';
import {Lawn} from './Lawn.jsx';
import {AirQuality} from './AirQuality.jsx';
import {Yeeha} from './yeeha.jsx';
import{ 
  View,
} from 'react-native';

export default function App() {
  return (
    <View>
      <Hello name="Rich" />
      <Hello />
      <Hello name="Biff" />
      <SnowRemoval cm={3} />
      <Acres squareFeet={43560} />
      <Acres squareFeet={87120} />
      <Acres squareFeet={21780} />
      <Lawn width={5} length={4} ratePerMinute={6} />
      <Lawn width={10} length={10} ratePerMinute={10} />
      <Lawn width={12} length={5} ratePerMinute={6} />
      <AirQuality aqi={25} />
      <AirQuality aqi={75} />
      <AirQuality aqi={125} />
      <AirQuality aqi={175} />
      <AirQuality aqi={250} />
      <Yeeha number={9} />
      <Yeeha number={14} />
      <Yeeha number={21} />
      <Yeeha number={5} />
    </View>
  );
}

