import { View, Text, Image } from 'react-native';
import styles from './styles';

const Anuncio = (props) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: props.image }} style={styles.image} />
      <Text style={styles.cardTitle}>{props.name}</Text>
      <Text style={styles.cardText}>
        {props.description}
      </Text>
    </View>
  );
};

export default Anuncio;
