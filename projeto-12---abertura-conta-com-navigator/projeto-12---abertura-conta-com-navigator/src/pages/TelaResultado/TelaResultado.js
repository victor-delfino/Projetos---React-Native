import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TelaResultado = ({ route }) => {
  const { nome, idade, sexo, escolaridade, limite, brasileiro } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Dados Informados</Text>
      <Text>Nome: {nome}</Text>
      <Text>Idade: {idade}</Text>
      <Text>Sexo: {sexo}</Text>
      <Text>Escolaridade: {escolaridade}</Text>
      <Text>Limite: R$ {Number(limite).toFixed(2)}</Text>
      <Text>Brasileiro: {brasileiro ? 'Sim' : 'Não'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default TelaResultado;
