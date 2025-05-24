import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from './TaskInputStyle';

export default function TaskInput(props) {
  const [task, setTask] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome da Tarefa</Text>
      <TextInput
        style={styles.input}
        value={task}
        onChangeText={setTask}
        placeholder="Digite a tarefa..."
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
            props.onSave(task);
            setTask('');
          }}
          style={styles.button}
        >
          <Text style={styles.text}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
