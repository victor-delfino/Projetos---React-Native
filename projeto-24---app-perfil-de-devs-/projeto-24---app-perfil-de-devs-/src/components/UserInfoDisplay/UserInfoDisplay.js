import React from 'react';
import { Text, View } from 'react-native';
import styles from './infoStyles';

export default function UserInfoDisplay(props) {
  if (!props.user) return null;

  return (
    <View style={styles.infoContainer}>
      <Text>Id: {props.user.id}</Text>
      <Text>Nome: {props.user.name}</Text>
      <Text>Repositórios: {props.user.public_repos}</Text>
      <Text>Criado em: {new Date(props.user.created_at).toLocaleDateString()}</Text>
      <Text>Seguidores: {props.user.followers}</Text>
      <Text>Seguindo: {props.user.following}</Text>
    </View>
  );
}
