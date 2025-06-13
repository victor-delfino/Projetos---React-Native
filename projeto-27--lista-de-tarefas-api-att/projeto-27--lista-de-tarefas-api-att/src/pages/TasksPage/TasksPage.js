import React, { useState, useEffect, useCallback } from 'react';
import { View, FlatList, Text, TouchableOpacity, Modal, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import TaskInput from '../../components/TaskInput/TaskInput';
import TaskItem from '../../components/TaskItem/TaskItem';

import styles from './tasksPageStyle';
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,  
} from '../../services/taskService';

export default function TasksPage() {
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  // Função para carregar tarefas
  const loadTasks = useCallback(async () => {
    try {
      const tarefas = await getTasks();
      setTasks(tarefas);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar as tarefas.');
      console.error(error);
    }
  }, []);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

const addTask = async (newTask) => {
  if (!newTask.trim()) return;
  try {
    console.log("AddTask - antes do createTask");
    const tarefaCriada = await createTask({ text: newTask });
    console.log("AddTask - depois do createTask", tarefaCriada);
    setTasks(prev => [...prev, tarefaCriada]);
    setModalVisible(false);
    console.log("AddTask - modal fechado");
  } catch (error) {
    console.error("AddTask - erro!", error);
    Alert.alert('Erro', 'Não foi possível adicionar a tarefa.');
  }
};
  // Remove tarefa por id
  const removeTask = async (id) => {
    try {
      await deleteTask(id);
      setTasks(prev => prev.filter(task => task.id !== id));
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível excluir a tarefa.');
      console.error(error);
    }
  };

  // Edita tarefa
  const editTask = async (id, newText) => {
    if (!newText.trim()) return;
    try {
      const tarefaAtualizada = await updateTask(id, { text: newText });
      setTasks(prev =>
        prev.map(task => (task.id === id ? tarefaAtualizada : task))
      );
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível editar a tarefa.');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Tarefas</Text>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onDelete={() => removeTask(item.id)}
            onEdit={editTask}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>Nenhuma tarefa cadastrada.</Text>
        }
        contentContainerStyle={
          tasks.length === 0 && {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }
        }
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
        activeOpacity={0.7}
      >
        <Ionicons name="add" size={32} color="#fff" />
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <TaskInput onCancel={() => setModalVisible(false)} onSave={addTask} />
      </Modal>
    </View>
  );
}