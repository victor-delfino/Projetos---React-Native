import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

export default function Detalhes({ route }) {
  const { produto } = route.params;

  return (
    <View style={styles.container}>
      <Image source={produto.imagem} style={styles.imagem} />
      <Text style={styles.nome}>{produto.nome}</Text>
      <Text style={styles.descricao}>{produto.descricao}</Text>
    </View>
  );
}
