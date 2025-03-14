import { View, Text, Button } from 'react-native'
import styles from './styles'
import {useState} from 'react'
import CampoTexto from '../../components/CampoTexto'

function Multiplicador(){
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularMultiplicacao = () => {
    const multiplicacao = parseFloat(num1) * parseFloat(num2);
    setResultado(isNaN(multiplicacao) ? 'Erro' : multiplicacao);
  };

 return(
  <View style={styles.container}>
      <CampoTexto valor={num1} setValor={setNum1} placeholder="Digite o primeiro número" />
      <CampoTexto valor={num2} setValor={setNum2} placeholder="Digite o segundo número" />
       <Button title="Multiplicar" color="blue" onPress={calcularMultiplicacao} />
      {resultado !== null && <Text style={styles.resultado}>Resultado: {resultado}</Text>}
    </View>
  )
}

export default Multiplicador