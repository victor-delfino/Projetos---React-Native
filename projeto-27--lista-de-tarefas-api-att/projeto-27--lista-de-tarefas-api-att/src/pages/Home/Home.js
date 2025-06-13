import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { getTasks, deleteTask, updateTaskStatus } from '../../services/taskService';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';

export default function HomeScreen({ navigation }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadTasks = async () => {
    setLoading(true);
    const data = await getTasks();
    setTasks(data);
    setLoading(false);
  };

  useFocusEffect(
    React.useCallback(() => {
      loadTasks();
    }, [])
  );

  const handleDelete = async (id) => {
    await deleteTask(id);
    setTasks((tasks) => tasks.filter((t) => t.id !== id));
  };

  const handleToggleStatus = async (id, currentStatus) => {
    setTasks((tasks) =>
      tasks.map((t) =>
        t.id === id ? { ...t, finished: !currentStatus } : t
      )
    );
    await updateTaskStatus(id, !currentStatus);
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator color="#1976D2" size={40} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskCard}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={item.finished ? styles.completed : styles.pending}>
              {item.finished ? '✔️ Concluída' : '⏳ Pendente'}
            </Text>

            <View style={styles.actionsRow}>
              <TouchableOpacity
                style={[styles.button, styles.details]}
                onPress={() => navigation.navigate('TaskDetail', { id: item.id })}
              >
                <MaterialCommunityIcons name="information" size={18} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.edit]}
                onPress={() => navigation.navigate('AddEditTask', { task: item })}
              >
                <MaterialCommunityIcons name="pencil" size={18} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button,
                  item.finished ? styles.markAsPending : styles.markAsCompleted,
                ]}
                onPress={() => handleToggleStatus(item.id, item.finished)}
              >
                <MaterialCommunityIcons
                  name={item.finished ? 'checkbox-blank-outline' : 'check-circle'}
                  size={18}
                  color="#fff"
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.delete]}
                onPress={() => handleDelete(item.id)}
              >
                <MaterialCommunityIcons name="delete" size={18} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <Text style={{ textAlign: 'center', color: '#999', marginTop: 40 }}>
            Nenhuma tarefa cadastrada.
          </Text>
        }
      />

      <TouchableOpacity
        style={styles.addButtonContainer}
        onPress={() => navigation.navigate('AddEditTask', { task: null })}
      >
        <MaterialCommunityIcons name="plus" size={22} color="#fff" />
        <Text style={styles.addButtonText}> Nova Tarefa</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f8fa",
    padding: 10,
    paddingTop: 40,
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  taskCard: {
    backgroundColor: '#fff',
    borderRadius: 14,
    marginVertical: 7,
    padding: 18,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1976D2",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: "#444",
    marginBottom: 4,
  },
  completed: {
    color: "#388e3c",
    marginBottom: 8,
    fontWeight: "bold",
  },
  pending: {
    color: "#d32f2f",
    marginBottom: 8,
    fontWeight: "bold",
  },
  actionsRow: {
    flexDirection: "row",
    gap: 8,
    marginTop: 6,
  },
  button: {
    borderRadius: 6,
    padding: 8,
    marginRight: 6,
    backgroundColor: "#1976D2",
    flexDirection: "row",
    alignItems: "center",
  },
  details: {
    backgroundColor: "#0288d1",
  },
  edit: {
    backgroundColor: "#FFD600",
  },
  markAsCompleted: {
    backgroundColor: "#388e3c",
  },
  markAsPending: {
    backgroundColor: "#FFA000",
  },
  delete: {
    backgroundColor: "#D32F2F",
  },
  addButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1976D2",
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 25,
    position: "absolute",
    bottom: 32,
    right: 20,
    elevation: 6,
    shadowColor: "#1976D2",
    shadowOpacity: 0.18,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
  },
  addButtonText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 16,
    marginLeft: 6,
  },
});