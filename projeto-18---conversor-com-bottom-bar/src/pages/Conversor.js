import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CampoTexto from '../components/CampoTexto/CampoTexto';
import Botao from '../components/Botao/Botao';

const taxas = {
  'Dólar': 0.17,  
  'Euro': 0.15,    
  'Bitcoin': 1 / 550000 
};

const Conversor = () => {
  const [valor, setValor] = useState('');
  const [resultados, setResultados] = useState({
    Dólar: '0.00',
    Euro: '0.00',
    Bitcoin: '0.00'
  });

  const converter = () => {
    const v = parseFloat(valor.replace(',', '.'));
    if (isNaN(v) || v <= 0) {
      setResultados({
        Dólar: 'Valor inválido',
        Euro: 'Valor inválido',
        Bitcoin: 'Valor inválido',
      });
      return;
    }

    setResultados({
      Dólar: (v * taxas.Dólar).toFixed(2),
      Euro: (v * taxas.Euro).toFixed(2),
      Bitcoin: (v * taxas.Bitcoin).toFixed(6),
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Conversor de Real para Dólar, Euro e Bitcoin</Text>
      
      <CampoTexto
        label="Valor em Real:"
        value={valor}
        onChangeText={setValor}
        keyboardType="numeric"
      />

      <Botao title="Converter" onPress={converter} />

      <View style={styles.bottomBar}>
        <View style={styles.resultBox}>
          <Text style={styles.label}>Dólar</Text>
          <Text style={styles.result}>{resultados.Dólar}</Text>
        </View>
        <View style={styles.resultBox}>
          <Text style={styles.label}>Euro</Text>
          <Text style={styles.result}>{resultados.Euro}</Text>
        </View>
        <View style={styles.resultBox}>
          <Text style={styles.label}>Bitcoin</Text>
          <Text style={styles.result}>{resultados.Bitcoin}</Text>
        </View>
      </View>
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
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#eee',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  resultBox: {
    alignItems: 'center',
    flex: 1,
  },
  label: {
    fontSize: 14,
    color: '#555',
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default Conversor;
