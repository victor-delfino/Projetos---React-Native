import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@tarefas';

export async function saveTasks(tasks) {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.warn('Erro ao salvar tarefas', error);
  }
}

export async function loadTasks() {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.warn('Erro ao carregar tarefas', error);
    return [];
  }
}
