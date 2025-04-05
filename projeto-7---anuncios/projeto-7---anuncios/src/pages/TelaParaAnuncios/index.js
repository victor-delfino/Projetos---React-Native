import { ScrollView, Text, View } from 'react-native';
import Anuncio from '../../components/Anuncios';
import styles from './styles';

const TelaAnuncio = () => {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Produtos à Venda</Text>
      <Text style={styles.subtitle}>
        Se você ama games, chegou ao lugar certo! Aqui estão alguns consoles incríveis disponíveis para venda.
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={true} style={styles.scroll}>
        <Anuncio
          name="Console #1"
          image="https://cdn-icons-png.flaticon.com/512/871/871363.png"
          description="Um console de última geração, ideal para quem quer performance e diversão sem limites."
        />
        <Anuncio
          name="Console #2"
          image="https://cdn-icons-png.flaticon.com/512/871/871363.png"
          description="Desempenho poderoso com gráficos incríveis para jogos exigentes."
        />
        <Anuncio
          name="Console #3"
          image="https://cdn-icons-png.flaticon.com/512/871/871363.png"
          description="Compacto, portátil e cheio de possibilidades para todos os estilos de jogo."
        />
        <Anuncio
          name="Console #4"
          image="https://cdn-icons-png.flaticon.com/512/871/871363.png"
          description="Conectividade e experiência gamer imersiva em qualquer lugar."
        />
        <Anuncio
          name="Console #5"
          image="https://cdn-icons-png.flaticon.com/512/871/871363.png"
          description="Tecnologia de ponta com grande custo-benefício e catálogo extenso."
        />
        <Anuncio
          name="Console #6"
          image="https://cdn-icons-png.flaticon.com/512/871/871363.png"
          description="O clássico que ainda conquista corações, com ótimo desempenho."
        />
      </ScrollView>
    </View>
  );
};

export default TelaAnuncio;
