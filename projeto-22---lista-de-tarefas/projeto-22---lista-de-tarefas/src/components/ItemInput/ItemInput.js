import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from './ItemInputStyle';

export default function ItemInput(props) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome do Produto</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Digite o nome do produto..."
      />
      <Text style={styles.label}>Quantidade</Text>
      <TextInput
        style={styles.input}
        value={quantity}
        onChangeText={setQuantity}
        placeholder="Digite a quantidade..."
        keyboardType="numeric"
      />
      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={props.onCancel}
          style={[styles.button, { backgroundColor: '#999' }]}
        >
          <Text style={styles.text}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.onSave({ name, quantity });
            setName('');
            setQuantity('');
          }}
          style={styles.button}
        >
          <Text style={styles.text}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
