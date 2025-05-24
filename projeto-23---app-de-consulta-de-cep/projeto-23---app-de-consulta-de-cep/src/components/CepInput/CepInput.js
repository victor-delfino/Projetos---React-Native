import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './InputStyles';

export default function CepInput(props) {
  return (
    <View style={styles.inputRow}>
      <TextInput
        style={styles.cep}
        placeholder="Digite o CEP..."
        value={props.cep}
        onChangeText={props.setCep}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.botao} onPress={props.onSearch}>
        <Ionicons name="checkmark" size={20} color="#fff" />
      </TouchableOpacity>

      {props.cep && (
        <TouchableOpacity style={styles.botaoLimpar} onPress={props.onClear}>
          <Ionicons name="close" size={20} color="#fff" />
        </TouchableOpacity>
      )}
    </View>
  );
}
