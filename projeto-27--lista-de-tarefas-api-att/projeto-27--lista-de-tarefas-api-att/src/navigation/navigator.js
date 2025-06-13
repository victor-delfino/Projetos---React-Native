import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../pages/Home/Home';
import TaskDetailScreen from '../pages/DetalheTask/DetalheTask';
import AddEditTaskScreen from '../pages/EditarTask/EditarTask';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Tarefas' }} />
        <Stack.Screen name="TaskDetail" component={TaskDetailScreen} options={{ title: 'Detalhes da Tarefa' }} />
        <Stack.Screen
          name="AddEditTask"
          component={AddEditTaskScreen}
          options={({ route }) => ({
            title: route?.params?.task ? 'Editar Tarefa' : 'Nova Tarefa',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}