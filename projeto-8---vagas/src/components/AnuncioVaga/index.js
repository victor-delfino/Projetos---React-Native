import { View, Text } from 'react-native';
import styles from './styles';

const AnuncioVaga = (props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cargo}>{props.cargo}</Text>
      <Text style={styles.descricao}>{props.descricao}</Text>
      <Text style={styles.salario}> Salário: {props.salario}</Text>
    </View>
  );
};

export default AnuncioVaga;
