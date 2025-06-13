import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { createTask, updateTask } from '../../services/taskService';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function AddEditTaskScreen({ route, navigation }) {
  const { task } = route.params || {};
  const [title, setTitle] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!title.trim()) {
      setError('O título é obrigatório');
      return;
    }

    try {
      if (task) {
        await updateTask(task.id, { title, description, finished: task.finished });
      } else {
        await createTask({ title, description });
      }
      navigation.goBack();
    } catch (err) {
      setError('Não foi possível salvar a tarefa.');
    }
  };

  return (
    <View style={styles.container}>
      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TextInput
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
        placeholderTextColor="#aaa"
      />
      <TextInput
        placeholder="Descrição"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
        multiline
        numberOfLines={4}
        placeholderTextColor="#aaa"
        textAlignVertical="top"
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.actionButton, styles.cancelButton]} onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={18} color="#fff" />
          <Text style={styles.cancelText}>Cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={handleSubmit}>
          <MaterialCommunityIcons name="content-save" size={18} color="#fff" />
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f8fa",
    padding: 24,
    justifyContent: "center",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
    borderColor: "#1976D2",
    borderWidth: 1,
  },
  error: {
    color: "#d32f2f",
    marginBottom: 10,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1976D2",
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: 8,
  },
  cancelButton: {
    backgroundColor: "#888",
    marginRight: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 8,
    fontSize: 16,
  },
  cancelText: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 8,
    fontSize: 16,
  },
});