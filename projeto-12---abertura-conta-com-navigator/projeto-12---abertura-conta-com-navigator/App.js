import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaFormulario from './src/pages/TelaFormulario/TelaFormulario';
import TelaResultado from './src/pages/TelaResultado/TelaResultado';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Formulario">
        <Stack.Screen name="Formulario" component={TelaFormulario} />
        <Stack.Screen name="Resultado" component={TelaResultado} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
