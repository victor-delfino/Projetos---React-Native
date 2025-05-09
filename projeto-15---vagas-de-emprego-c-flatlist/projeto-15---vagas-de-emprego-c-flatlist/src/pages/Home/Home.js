import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import VagaCard from '../../components/VagaCard/VagaCard';
import Botao from '../../components/Botao/Botao';
import styles from './styles';

// Dados embutidos
const vagas = [
  {
    id: '1',
    titulo: 'Desenvolvedor Backend',
    salario: 'R$ 3000,00',
    descricao: 'Desenvolver APIs RESTful utilizando Node.js e MongoDB.',
    contato: 'contato@empresa.com',
  },
  {
    id: '2',
    titulo: 'Engenheiro de Dados',
    salario: 'R$ 4000,00',
    descricao: 'Realizar análise de dados e implementar soluções de BI.',
    contato: 'dados@empresa.com',
  },
];

export default function Home() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <VagaCard vaga={item} />
      <Botao
        title="Saiba mais"
        onPress={() => navigation.navigate('DetalhesVaga', { vaga: item })}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Vagas</Text>
      <FlatList
        data={vagas}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}