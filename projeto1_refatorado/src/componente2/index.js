import { View, Text } from 'react-native';
import styles from './styles'; 

function Componente2() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formação:</Text>
      <Text style={styles.text}>ADS - Fatec PERIGOSA</Text>
    </View>
  );
}

export default Componente2;
