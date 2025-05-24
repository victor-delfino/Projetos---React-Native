import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/pages/Experiencia';
import Sobre from './src/pages/Formacao';
import Contato from './src/pages/Pessoal';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Pessoal" component={Contato} />
        <Tab.Screen name="Formação" component={Sobre} />
        <Tab.Screen name="Experiência" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
