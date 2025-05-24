import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Conversor from './src/pages/Conversor';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Conversor de Moedas" component={Conversor} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
