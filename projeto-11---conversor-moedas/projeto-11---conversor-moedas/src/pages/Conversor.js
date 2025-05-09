import React, { useState } from 'react';
import { View, Text } from 'react-native';
import CampoTexto from '../components/CampoTexto/CampoTexto';
import CampoPicker from '../components/CampoPicker/CampoPicker';
import Botao from '../components/Botao/Botao';
import styles from './styles';

const taxas = {
  'Dólar': { 'Real': 5.5, 'Euro': 0.9 },
  'Real': { 'Dólar': 0.17, 'Euro': 0.15 },
  'Euro': { 'Real': 6, 'Dólar': 1.1 },
};

const Conversor = () => {
  const [valor, setValor] = useState('');
  const [de, setDe] = useState('Dólar');
  const [para, setPara] = useState('Real');
  const [resultado, setResultado] = useState('');

  const converter = () => {
    const v = parseFloat(valor);
    if (isNaN(v)) return setResultado('Valor inválido');
    if (de === para) return setResultado(`${v.toFixed(2)} ${para}`);

    const taxa = taxas[de][para];
    const convertido = v * taxa;
    setResultado(`${convertido.toFixed(2)} ${para}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Conversor de Moedas{"\n"}Dólar, Real e Euro</Text>
      
      <CampoTexto label="Valor:" value={valor} onChangeText={setValor} keyboardType="numeric" />
      <CampoPicker label="De:" value={de} onValueChange={setDe} options={['Dólar', 'Real', 'Euro']} />
      <CampoPicker label="Para:" value={para} onValueChange={setPara} options={['Dólar', 'Real', 'Euro']} />
      
      <Botao title="Converter" onPress={converter} />

      <Text style={styles.resultado}>Resultado: {resultado}</Text>
    </View>
  );
};

export default Conversor;
