
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import styles from './styles'; 

export default function DetalhesVaga() {
  const route = useRoute();
  const vaga = route.params.vaga;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{vaga.titulo}</Text>
      <Text style={styles.label}>Salário:</Text>
      <Text style={styles.info}>{vaga.salario}</Text>
      <Text style={styles.label}>Descrição:</Text>
      <Text style={styles.info}>{vaga.descricao}</Text>
      <Text style={styles.label}>Contato:</Text>
      <Text style={styles.info}>{vaga.contato}</Text>
    </View>
  );
}