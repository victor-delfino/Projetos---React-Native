import { View, Text } from 'react-native';
import styles from './styles'; 

function Componente1() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dados Pessoais:</Text>
      <Text style={styles.text}>Victor Hugo</Text>
    </View>
  );
}

export default Componente1;
