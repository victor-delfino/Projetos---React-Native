import { useState } from 'react';
import { ScrollView, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CampoTexto from '../../components/CampoTexto/CampoTexto';
import CampoPicker from '../../components/CampoPicker/CampoPicker';
import CampoSlider from '../../components/CampoSlider/CampoSlider';
import CampoSwitch from '../../components/CampoSwitch/CampoSwitch';
import styles from './TelaFormularioStyles';

const TelaFormulario = () => {
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('');
  const [escolaridade, setEscolaridade] = useState('');
  const [limite, setLimite] = useState(0);
  const [brasileiro, setBrasileiro] = useState(false);

  const handleConfirmar = () => {
    navigation.navigate('Resultado', {
      nome,
      idade,
      sexo,
      escolaridade,
      limite,
      brasileiro,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Abertura de Conta</Text>

      <CampoTexto label="Nome" value={nome} onChangeText={setNome} placeholder="Digite seu nome" />
      <CampoTexto label="Idade" value={idade} onChangeText={setIdade} placeholder="Digite sua idade" keyboardType="numeric" />
      <CampoPicker label="Sexo" value={sexo} onValueChange={setSexo} options={[
        { label: 'Selecione', value: '' },
        { label: 'Masculino', value: 'Masculino' },
        { label: 'Feminino', value: 'Feminino' },
      ]} />
      <CampoPicker label="Escolaridade" value={escolaridade} onValueChange={setEscolaridade} options={[
        { label: 'Selecione', value: '' },
        { label: 'Ensino Médio', value: 'Ensino Médio' },
        { label: 'Superior Incompleto', value: 'Superior Incompleto' },
        { label: 'Superior Completo', value: 'Superior Completo' },
      ]} />
      <CampoSlider label="Limite" value={limite} onChange={setLimite} min={0} max={10000} step={100} />
      <CampoSwitch label="Brasileiro" value={brasileiro} onChange={setBrasileiro} />

      <Button title="Confirmar" onPress={handleConfirmar} />
    </ScrollView>
  );
};

export default TelaFormulario;
