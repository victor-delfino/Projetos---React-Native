import { ScrollView, View, Text } from 'react-native';
import AnuncioVaga from '../../components/AnuncioVaga';
import styles from './styles';

const vagas = [
  {
    cargo: 'Analista de Dados',
    descricao: 'Responsável por interpretar dados e apoiar decisões estratégicas.',
    salario: 'R$ 5.000 - R$ 8.000',
  },
  {
    cargo: 'Cientista de Dados',
    descricao: 'Cria modelos estatísticos e trabalha com Machine Learning.',
    salario: 'R$ 8.000 - R$ 15.000',
  },
  {
    cargo: 'Dev Full Stack',
    descricao: 'Atua no front e back-end com foco em aplicações completas.',
    salario: 'R$ 6.000 - R$ 12.000',
  },
  {
    cargo: 'Engenheiro de Dados',
    descricao: 'Constrói pipelines, armazena e organiza grandes volumes de dados.',
    salario: 'R$ 9.000 - R$ 16.000',
  },
  {
    cargo: 'Especialista em Segurança da Informação',
    descricao: 'Monitora e protege sistemas contra ameaças e vazamentos.',
    salario: 'R$ 7.000 - R$ 13.000',
  },
  {
    cargo: 'DevOps Engineer',
    descricao: 'Integra processos de desenvolvimento e operações com automação.',
    salario: 'R$ 8.000 - R$ 14.000',
  },
  {
    cargo: 'Arquiteto de Software',
    descricao: 'Projeta soluções de software escaláveis e eficientes.',
    salario: 'R$ 10.000 - R$ 18.000',
  },
];

const TelaAnuncio = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vagas em TI</Text>
      <Text style={styles.subtitle}>Confira oportunidades incríveis para sua carreira:</Text>

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={true}>
        {vagas.map((vaga, index) => (
          <AnuncioVaga
            key={index}
            cargo={vaga.cargo}
            descricao={vaga.descricao}
            salario={vaga.salario}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default TelaAnuncio;
