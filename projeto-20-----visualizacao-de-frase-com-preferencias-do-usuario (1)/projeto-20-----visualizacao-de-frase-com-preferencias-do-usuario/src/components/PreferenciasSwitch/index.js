import React from 'react';
import { View, Text, Switch } from 'react-native';
import styles from './preferenciasSwitchStyle';

const PreferenciasSwitch = (props) => {
  return (
    <View style={styles.switchContainer}>
      <Text style={styles.label}>{props.label}</Text>
      <Switch value={props.value} onValueChange={props.onValueChange} />
    </View>
  );
};

export default PreferenciasSwitch;
