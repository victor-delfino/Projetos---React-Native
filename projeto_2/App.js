import React, { useState } from 'react';
import { View } from 'react-native';
import Titulo from './src/Titulo';
import Contador from './src/Contador';
import styles from './src/Contador/styles'; 

export default function App() {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador(contador + 1);

  const decrementar = () => setContador(contador - 1);

  return (
    <View style={styles.container}>
      <Titulo />
      <Contador
        contador={contador}
        incrementar={incrementar}
        decrementar={decrementar}
      />
    </View>
  );
}
