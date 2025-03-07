import { View, Image } from 'react-native';
import styles from './styles';

function ImgComponente(props) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: props.uri }} style={[styles.image, { width: props.width, height: props.height }]} />
    </View>
  );
}

export default ImgComponente;
