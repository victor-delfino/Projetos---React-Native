import { View, Text, Button, Image } from 'react-native';
import styles from './styles';

const img = 'https://images.emojiterra.com/google/android-12l/512px/1f914.png';

const GerarNumero = ({ resultado, onDiscover }) => {
  return (
    <View style={styles.area}>
      <Text style={styles.title}>Número Aleatório</Text>
      <Image source={{ uri: img }} style={styles.image} />
      <Text style={styles.prompt}>Vou adivinhar que número você está pensando!</Text>
      <Button title="Descobrir" onPress={onDiscover} color="#007bff" />
      {resultado !== null && (
        <Text style={styles.resultText}>{resultado}</Text>
      )}
    </View>
  );
};

export default GerarNumero;
