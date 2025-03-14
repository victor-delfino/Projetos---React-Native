import { TextInput} from 'react-native';
import styles from './styles';

function CampoTexto(props) {
  return (
    <TextInput
      style={styles.input}
      value={props.valor}
      onChangeText={props.setValor}
      placeholder={props.placeholder}
    />
  );
}

export default CampoTexto