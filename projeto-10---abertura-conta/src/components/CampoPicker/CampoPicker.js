import { View, Text } from 'react-native';
import styles from './CampoPickerStyles';
import {Picker} from '@react-native-picker/picker';

const CampoPicker = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}:</Text>
      <Picker
        selectedValue={props.value}
        onValueChange={props.onValueChange}
        style={styles.picker}
      >
        {props.options.map((opt, idx) => (
          <Picker.Item key={idx} label={opt.label} value={opt.value} />
        ))}
      </Picker>
    </View>
  );
};

export default CampoPicker;
