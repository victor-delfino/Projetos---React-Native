import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import styles from './styles';

const ProdutoCard = (props) => (
  <View style={styles.card}>
    <Image source={props.imagem} style={styles.imagem} />
    <Text style={styles.nome}>{props.nome}</Text>
    <Button title="Ver detalhes" onPress={props.onPress} />
  </View>
);

export default ProdutoCard;