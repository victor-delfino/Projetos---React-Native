import { View } from 'react-native';
import GerarNumeroLogica from './src/components/GerarNumeroLogica';
import styles from './src/pages/GerarNumero';

const App = () => {
  return (
    <View style={styles.container}>
      <GerarNumeroLogica />
    </View>
  );
};

export default App;
