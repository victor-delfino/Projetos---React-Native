import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { getTaskById, updateTaskStatus } from '../../services/taskService';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TaskDetailScreen({ route, navigation }) {
  const { id } = route.params;
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadTask = async () => {
    setLoading(true);
    const data = await getTaskById(id);
    setTask(data);
    setLoading(false);
  };

  useEffect(() => {
    loadTask();
  }, []);

  const handleToggleStatus = async () => {
    await updateTaskStatus(task.id, !task.finished);
    setTask((prev) => ({ ...prev, finished: !prev.finished }));
  };

  if (loading || !task) {
    return <ActivityIndicator style={{ flex: 1 }} color="#1976D2" size={36} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task.title}</Text>
      <Text style={styles.description}>{task.description}</Text>

      <Text style={[styles.statusText, task.finished ? styles.completed : styles.pending]}>
        {task.finished ? '✔️ Concluída' : '⏳ Pendente'}
      </Text>

      <TouchableOpacity
        style={[
          styles.actionButton,
          task.finished ? styles.buttonPending : styles.buttonCompleted,
        ]}
        onPress={handleToggleStatus}
      >
        <MaterialCommunityIcons
          name={task.finished ? 'checkbox-blank-outline' : 'check-circle'}
          size={18}
          color="#fff"
        />
        <Text style={styles.actionButtonText}>
          {task.finished ? 'Marcar como Pendente' : 'Marcar como Concluída'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <MaterialCommunityIcons name="arrow-left" size={18} color="#fff" />
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f8fa",
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    color: "#1976D2",
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#444",
    marginBottom: 12,
    textAlign: "center",
  },
  statusText: {
    fontSize: 16,
    marginBottom: 24,
    fontWeight: "bold",
  },
  completed: {
    color: "#388e3c",
  },
  pending: {
    color: "#FFA000",
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#388e3c",
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: 8,
    marginBottom: 18,
  },
  buttonCompleted: {
    backgroundColor: "#388e3c",
  },
  buttonPending: {
    backgroundColor: "#FFA000",
  },
  actionButtonText: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 8,
    fontSize: 16,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1976D2",
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: 8,
  },
  backButtonText: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 8,
    fontSize: 16,
  },
});