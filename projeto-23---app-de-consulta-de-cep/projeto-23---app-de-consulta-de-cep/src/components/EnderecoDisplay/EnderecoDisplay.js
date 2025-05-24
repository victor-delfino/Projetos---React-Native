import React from 'react';
import { Text, View } from 'react-native';
import styles from './EnderecoStyles';

export default function EnderecoDisplay(props) {
  const endereco = props.endereco;

  const enderecoCarregado =
    endereco?.logradouro || endereco?.bairro || endereco?.localidade;

  if (!enderecoCarregado) return null;

  return (
    <View>
      <Text style={styles.endereco}>CEP: {endereco.cep}</Text>
      <Text style={styles.endereco}>Logradouro: {endereco.logradouro}</Text>
      <Text style={styles.endereco}>Bairro: {endereco.bairro}</Text>
      <Text style={styles.endereco}>Cidade: {endereco.localidade}</Text>
      <Text style={styles.endereco}>Estado: {endereco.uf}</Text>
    </View>
  );
}
