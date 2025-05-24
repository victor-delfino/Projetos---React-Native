import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
 
import Home from './src/pages/Experiencia';
import Sobre from './src/pages/Formacao';
import Contato from './src/pages/Pessoal';
 
const Tab = createMaterialTopTabNavigator();
 
export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Pessoal' component={Contato} />
        <Tab.Screen name='Formação' component={Sobre} />
        <Tab.Screen name='Experiência' component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
