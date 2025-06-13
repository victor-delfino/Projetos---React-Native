import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from './TaskInputStyle';

export default function TaskInput(props) {
  const [task, setTask] = useState('');

  const handleSave = async () => {
    if (!task.trim()) {
      alert('Digite uma tarefa válida');
      return;
    }
    try {
      await props.onSave(task);
      setTask('');
      // o modal será fechado pelo TasksPage.js após salvar
    } catch (error) {
      alert('Erro ao salvar tarefa');
      console.error(error);
    }
  };

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
        <TouchableOpacity onPress={props.onCancel} style={[styles.button, { backgroundColor: '#999' }]}>
          <Text style={styles.text}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSave} style={styles.button}>
          <Text style={styles.text}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}