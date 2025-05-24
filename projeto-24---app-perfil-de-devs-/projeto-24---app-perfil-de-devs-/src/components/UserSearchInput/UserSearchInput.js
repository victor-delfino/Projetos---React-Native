import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './inputStyles';

export default function UserSearchInput(props) {
  return (
    <View style={styles.inputRow}>
      <TextInput
        placeholder="Digite o login git..."
        value={props.login}
        onChangeText={props.setLogin}
        style={styles.input}
      />
      <TouchableOpacity style={styles.botao} onPress={props.onSearch}>
        <Ionicons name="search" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
