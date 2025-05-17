import React from 'react';
import { View, Text, Picker } from 'react-native';
import styles from './styles';

const CampoPicker = (props) => (
  <View style={styles.container}>
    <Text>{props.label}</Text>
    <Picker
      selectedValue={props.value}
      onValueChange={props.onValueChange}
      style={styles.picker}
    >
      {(props.options || []).map((item) => (
        <Picker.Item label={item} value={item} key={item} />
      ))}
    </Picker>
  </View>
);

export default CampoPicker;