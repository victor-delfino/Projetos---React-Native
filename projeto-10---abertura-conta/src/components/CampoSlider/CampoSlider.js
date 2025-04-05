import { View, Text } from 'react-native';
import styles from './CampoSliderStyles';
import Slider from '@react-native-community/slider';

const CampoSlider = (props) => {
  return (
    <View style={styles.container}>
      <Text>{props.label}: R$ {props.value.toFixed(2)}</Text>
      <Slider
        minimumValue={0}
        maximumValue={10000}
        value={props.value}
        onValueChange={props.onChange}
        minimumTrackTintColor="#1e40af"
        maximumTrackTintColor="#ccc"
      />
    </View>
  );
};

export default CampoSlider;

