import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, TouchableOpacity, Modal } from 'react-native';
import TaskInput from '../../components/TaskInput/TaskInput';
import TaskItem from '../../components/TaskItem/TaskItem';
import { loadTasks, saveTasks } from '../../utils/storage';
import { Ionicons } from '@expo/vector-icons';
import styles from './tasksPageStyle'; 

export default function TasksPage() {
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    loadTasks().then(setTasks);
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (newTask) => {
    if (!newTask) return;
    const updatedTasks = [...tasks, { id: Date.now().toString(), text: newTask }];
    setTasks(updatedTasks);
    setModalVisible(false);
  };

  const deleteTask = (id) => {
    const updated = tasks.filter(task => task.id !== id);
    setTasks(updated);
  };

  const editTask = (id, newText) => {
    const updated = tasks.map(task => (task.id === id ? { ...task, text: newText } : task));
    setTasks(updated);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem task={item} onDelete={deleteTask} onEdit={editTask} />
        )}
        ListEmptyComponent={<Text style={styles.empty}>Nenhuma tarefa</Text>}
      />

      <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
        <Ionicons name="add" size={32} color="#fff" />
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <TaskInput onCancel={() => setModalVisible(false)} onSave={addTask} />
      </Modal>
    </View>
  );
}
