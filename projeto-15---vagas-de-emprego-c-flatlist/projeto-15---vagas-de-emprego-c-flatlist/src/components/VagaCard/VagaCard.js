// src/components/VagaCard/VagaCard.js
import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles'; 

const VagaCard = (props) => (
  <View style={styles.card}>
    <Text style={styles.titulo}>{props.vaga.titulo}</Text>
    <Text style={styles.salario}>Salário: {props.vaga.salario}</Text>
  </View>
);

export default VagaCard;