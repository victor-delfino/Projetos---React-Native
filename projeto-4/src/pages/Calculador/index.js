import { View, Text, Button, Image } from 'react-native';
import styles from './styles';
import { useState } from 'react';
import CampoValor from '../../components/CampoValor';

function Calculador() {
  const [valorEtanol, setValorEtanol] = useState('');
  const [valorGasolina, setValorGasolina] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularVantagem = () => {
    const etanol = parseFloat(valorEtanol);
    const gasolina = parseFloat(valorGasolina);

    if (isNaN(etanol) || isNaN(gasolina) || gasolina === 0) {
      setResultado('Erro: Valores inválidos!');
      return;
    }

    const resultadoCalculo = (etanol / gasolina).toFixed(2);

    if (resultadoCalculo <= 0.7) {
      setResultado('O Etanol é mais vantajoso!');
    } else {
      setResultado('A Gasolina é mais vantajosa!');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://soudepalmas.com.br/wp-content/uploads/2022/03/combustiveis_Easy-Resize.com_.jpg' }}
        style={{ width: '100%', height: 200, marginBottom: 20 }}
        resizeMode="cover"
      />

      <CampoValor valor={valorEtanol} setValor={setValorEtanol} placeholder="Preço do Etanol" />
      <CampoValor valor={valorGasolina} setValor={setValorGasolina} placeholder="Preço da Gasolina" />
      <Button title="Calcular" color="blue" onPress={calcularVantagem} />
      {resultado !== null && <Text style={styles.resultado}>{resultado}</Text>}
    </View>
  );
}

export default Calculador;
