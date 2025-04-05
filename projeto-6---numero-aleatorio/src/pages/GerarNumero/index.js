
import { useState } from 'react';
import { View, Text, Button, Image, TextInput } from 'react-native';
import styles from './styles';

const img = 'https://images.emojiterra.com/google/android-12l/512px/1f914.png';

const GerarNumero = (props) => {
  const [palpite, setPalpite] = useState('');
  const [mensagem, setMensagem] = useState('');

  const verificarPalpite = () => {
    const numeroGerado = props.onDiscover(); 
    
    if (parseInt(palpite) === numeroGerado) {
      setMensagem('Você acertou!');
    } else {
      setMensagem(`Errou! O número era ${numeroGerado}`);
    }
  };

  const recomeçar = () => {
    setPalpite('');
    setMensagem('');
  };

  return (
    <View style={styles.area}>
      <Text style={styles.title}>Número Aleatório</Text>
      <Image source={{ uri: img }} style={styles.image} />
      <Text style={styles.prompt}>Adivinhe o número de 0 a 10</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu palpite"
        keyboardType="numeric"
        value={palpite}
        onChangeText={setPalpite}
      />

      <Button title="Descobrir" onPress={verificarPalpite} color="#007bff" />

      {mensagem !== '' && (
        <>
          <Text style={styles.resultText}>{mensagem}</Text>
          <View style={{ marginTop: 10 }}>
            <Button title="Recomeçar" onPress={recomeçar} color="#6c757d" />
          </View>
        </>
      )}
    </View>
  );
};

export default GerarNumero;
