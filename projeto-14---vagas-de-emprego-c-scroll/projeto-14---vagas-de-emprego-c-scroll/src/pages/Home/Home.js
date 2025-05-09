
import { ScrollView, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import VagaCard from '../../components/VagaCard/VagaCard';
import Botao from '../../components/Botao/Botao';
import styles from './styles';

const vagas = [
  {
    id: 1,
    titulo: 'Desenvolvedor Backend',
    salario: 'R$ 3000,00',
    descricao: 'Desenvolver APIs RESTful utilizando Node.js e MongoDB.',
    contato: 'contato@empresa.com',
  },
  {
    id: 2,
    titulo: 'Engenheiro de Dados',
    salario: 'R$ 4000,00',
    descricao: 'Realizar análise de dados e implementar soluções de BI.',
    contato: 'dados@empresa.com',
  },
];

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Vagas</Text>
      <ScrollView>
        {vagas.map((vaga) => (
          <View key={vaga.id}>
            <VagaCard vaga={vaga} />
            <Botao
              title="Saiba mais"
              onPress={() => navigation.navigate('DetalhesVaga', { vaga })}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}