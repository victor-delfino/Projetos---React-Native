import { View, Text, Button, Image } from 'react-native';
import { useState } from 'react';
import CampoValor from '../../components/CampoValor'; 
import styles from './styles';

function CalculadorIMC() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('Insira seus dados:');

  const calcularIMC = () => {

    const pesoNum = parseFloat(peso.replace(',', '.'));
    const alturaNum = parseFloat(altura.replace(',', '.'));


    if (isNaN(pesoNum) || isNaN(alturaNum) || pesoNum <= 0 || alturaNum <= 0) {
      setResultado('Erro: Valores inválidos!');
      return;
    }


    const imc = pesoNum / (alturaNum * alturaNum);


    let classificacao = '';
    if (imc < 18.5) classificacao = 'Abaixo do normal';
    else if (imc < 24.9) classificacao = 'Normal';
    else if (imc < 29.9) classificacao = 'Sobrepeso';
    else if (imc < 34.9) classificacao = 'Obesidade grau I';
    else if (imc < 39.9) classificacao = 'Obesidade grau II';
    else classificacao = 'Obesidade grau III';

    setResultado(`IMC: ${imc.toFixed(2)} - ${classificacao}`);
  };

  const resetar = () => {
    setPeso('');
    setAltura('');
    setResultado('Insira seus dados:');
  };

  return (
    <View style={styles.container}>
     <Text style={styles.titulo}>Calculadora de IMC</Text> 
      <Image
        source={{ uri: 'https://static.vecteezy.com/ti/vetor-gratis/p1/15377085-cara-garota-exercitando-com-halteres-jovem-casal-treinando-juntos-homem-mulher-fazendo-fitness-treino-os-atletas-trabalham-a-forca-preparam-o-corpo-para-a-competicao-pratica-de-perda-de-peso-contorno-do-vetor.jpg' }}
        style={{ width: '100%', height: 200, marginBottom: 20 }}
        resizeMode="cover"
      />

      <CampoValor valor={peso} setValor={setPeso} placeholder="Peso (kg)" />
      <CampoValor valor={altura} setValor={setAltura} placeholder="Altura (m)" />

      <Button title="Calcular" color="blue" onPress={calcularIMC} />
      <Button title="Resetar" color="gray" onPress={resetar} />

      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  );
}

export default CalculadorIMC;
