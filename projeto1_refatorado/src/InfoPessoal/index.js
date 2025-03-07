import { View, Text } from 'react-native';
import styles from './styles';

function InfoPessoal(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.text}>{props.content}</Text>
    </View>
  );
}

export default  InfoPessoal;