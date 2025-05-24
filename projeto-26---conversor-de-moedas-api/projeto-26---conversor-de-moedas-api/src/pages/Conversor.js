import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import CampoTexto from '../components/CampoTexto/CampoTexto';
import Botao from '../components/Botao/Botao';
import CampoPicker from '../components/CampoPicker/CampoPicker';
import styles from './styles'; // Estilos globais

const Conversor = () => {
  const [valor, setValor] = useState('');
  const [moedaDe, setMoedaDe] = useState('Real');
  const [moedaPara, setMoedaPara] = useState('Dólar');
  const [resultado, setResultado] = useState('');
  const [taxas, setTaxas] = useState({});

  const moedas = ['Real', 'Dólar', 'Euro', 'Bitcoin'];

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const resUSD = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL');
        const resEUR = await fetch('https://economia.awesomeapi.com.br/json/last/EUR-BRL');
        const resBTC = await fetch('https://economia.awesomeapi.com.br/json/last/BTC-BRL');

        const dataUSD = await resUSD.json();
        const dataEUR = await resEUR.json();
        const dataBTC = await resBTC.json();

        setTaxas({
          Real: 1,
          Dólar: parseFloat(dataUSD.USDBRL.ask),
          Euro: parseFloat(dataEUR.EURBRL.ask),
          Bitcoin: parseFloat(dataBTC.BTCBRL.ask),
        });
      } catch (error) {
        console.error('Erro ao buscar taxas:', error);
        alert('Falha ao carregar taxas de câmbio.');
      }
    };

    fetchRates();
  }, []);

  const converter = () => {
    const valorNumerico = parseFloat(valor.replace(',', '.'));
    if (isNaN(valorNumerico) || valorNumerico <= 0) {
      setResultado('Insira um valor válido');
      return;
    }

    let taxaFinal;

    if (moedaDe === moedaPara) {
      setResultado(`${valorNumerico.toFixed(2)} ${moedaPara}`);
      return;
    }

    if (moedaDe === 'Real') {
      taxaFinal = 1 / taxas[moedaPara];
    } else if (moedaPara === 'Real') {
      taxaFinal = taxas[moedaDe];
    } else {
      taxaFinal = taxas[moedaDe] / taxas[moedaPara];
    }

    if (!taxaFinal) {
      setResultado('Erro na conversão');
      return;
    }

    const valorConvertido = (valorNumerico * taxaFinal).toFixed(2);
    setResultado(`${valorConvertido} ${moedaPara}`);
  };

  return (
    <View style={styles.containerGlobal}>
      <Text style={styles.titulo}>Conversor de Moedas</Text>

      <CampoTexto
        label="Valor:"
        value={valor}
        onChangeText={setValor}
        keyboardType="numeric"
      />

      <CampoPicker
        label="De:"
        options={moedas}
        value={moedaDe}
        onValueChange={setMoedaDe}
      />

      <CampoPicker
        label="Para:"
        options={moedas}
        value={moedaPara}
        onValueChange={setMoedaPara}
      />

      <Botao title="Converter" onPress={converter} />

      <View style={styles.resultadoContainer}>
        <Text style={styles.label}>Valor convertido:</Text>
        <Text style={styles.resultado}>{resultado}</Text>
      </View>
    </View>
  );
};

export default Conversor;
