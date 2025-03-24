import { TextInput } from 'react-native';
import styles from './styles';

function CampoValor(props) {
  return (
    <TextInput
      style={styles.input}
      value={props.valor}
      onChangeText={props.setValor}
      placeholder={props.placeholder}
      keyboardType="numeric"
    />
  );
}

export default CampoValor;
