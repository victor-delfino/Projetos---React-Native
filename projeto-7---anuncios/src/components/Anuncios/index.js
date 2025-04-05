import { View, Text, Image } from 'react-native';
import styles from './styles';

const Anuncio = ({ name }) => {
  const image = 'https://cdn-icons-png.flaticon.com/512/871/871363.png';

  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.cardTitle}>{name}</Text>
      <Text style={styles.cardText}>
        Um console de última geração, ideal para quem quer performance e diversão sem limites. Aproveite já!
      </Text>
    </View>
  );
};

export default Anuncio;
