import { Text, Switch, View } from 'react-native';
import styles from './CampoSwitchStyles';

const CampoSwitch = (props) => {
  return (
    <View style={styles.container}>
      <Text>{props.label}</Text>
      <Switch
        value={props.value}
        onValueChange={props.onChange}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={props.value ? '#1e40af' : '#f4f3f4'}
      />
    </View>
  );
};

export default CampoSwitch;
