import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CampoTexto from '../components/CampoTexto/CampoTexto';
import Botao from '../components/Botao/Botao';

const Conversor = ({ moeda, taxa }) => {
  const [valor, setValor] = useState('');
  const [resultado, setResultado] = useState('');

  const converter = () => {
    const v = parseFloat(valor.replace(',', '.'));
    if (isNaN(v) || v <= 0) {
      setResultado('Valor inválido');
      return;
    }
    const convertido = (v * taxa).toFixed(moeda === 'Bitcoin' ? 6 : 2);
    setResultado(`${convertido}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Conversor de Moedas</Text>

      <CampoTexto
        label={`Digite o valor em R$`}
        value={valor}
        onChangeText={setValor}
        keyboardType="numeric"
      />

      <Botao title="Converter" onPress={converter} />

      <Text style={styles.resultadoTitulo}>Resultado</Text>
      <Text style={styles.resultadoValor}>{resultado}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#c00',
    textAlign: 'center',
    marginBottom: 30,
  },
  resultadoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007aff',
    marginTop: 30,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  resultadoValor: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default Conversor;
