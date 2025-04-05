import { ScrollView, Text, View } from 'react-native';
import Anuncios from '../../components/Anuncios';
import styles from './styles';

const TelaAnuncio = () => {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Produtos à Venda</Text>
      <Text style={styles.subtitle}>
        Se você ama games, chegou ao lugar certo! Aqui estão alguns consoles incríveis disponíveis para venda.
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={true} style={styles.scroll}>
        {Array.from({ length: 6 }).map((_, index) => (
          <Anuncios key={index} name={`Console #${index + 1}`} />
        ))}
      </ScrollView>
    </View>
  );
};

export default TelaAnuncio;
