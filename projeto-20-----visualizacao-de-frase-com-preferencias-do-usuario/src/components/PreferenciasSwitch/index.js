import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const PreferenciasSwitch = ({ label, value, onValueChange }) => {
  return (
    <View style={styles.switchContainer}>
      <Text style={styles.label}>{label}</Text>
      <Switch value={value} onValueChange={onValueChange} />
    </View>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  label: {
    marginRight: 8,
    fontWeight: 'bold',
  },
});

export default PreferenciasSwitch;
