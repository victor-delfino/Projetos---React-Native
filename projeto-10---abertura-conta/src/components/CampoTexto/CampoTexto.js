import { View, Text, TextInput } from 'react-native';
import styles from './CampoTextoStyles';

const CampoTexto = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}:</Text>
      <TextInput
        style={styles.input}
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        keyboardType={props.keyboardType || 'default'}
      />
    </View>
  );
};

export default CampoTexto;
