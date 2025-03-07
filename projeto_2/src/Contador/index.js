import { View, Text, Button } from 'react-native';
import styles from './styles'; 

function Contador(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.counter}>Pessoas presentes: {props.contador}</Text>
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={props.incrementar} color='green'/>
        <Button title="-" onPress={props.decrementar} color='red' />
      </View>
    </View>
  );
}

export default Contador;
