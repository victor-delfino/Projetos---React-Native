const BASE_URL = 'https://jsonplaceholder.typicode.com/todos';

export const getTasks = async () => {
  const response = await fetch(BASE_URL);
  if (!response.ok) throw new Error('Erro ao buscar tarefas');
  const data = await response.json();

  // Pega só os primeiros 5 itens
  const primeirasCinco = data.slice(0, 5);

  // Mapeia para seu formato (id, text, completed)
  return primeirasCinco.map(task => ({
    id: task.id,
    text: task.title,
    completed: task.completed,
  }));
};

export const getTaskById = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  if (!response.ok) throw new Error('Erro ao buscar tarefa');
  const task = await response.json();
  return {
    id: task.id,
    text: task.title,
    completed: task.completed,
  };
};

export const createTask = async (task) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: task.text,
      completed: task.completed || false,
      userId: 1, // pode ser fixo
    }),
  });
  if (!response.ok) throw new Error('Erro ao criar tarefa');
  const data = await response.json();
  return {
    id: data.id,
    text: data.title,
    completed: data.completed,
  };
};

export const updateTask = async (id, task) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT', // ou PATCH, depende da sua lógica
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: task.text,
      completed: task.completed || false,
      userId: 1,
    }),
  });
  if (!response.ok) throw new Error('Erro ao atualizar tarefa');
  const data = await response.json();
  return {
    id: data.id,
    text: data.title,
    completed: data.completed,
  };
};

export const deleteTask = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Erro ao deletar tarefa');
  return true;
};
