import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Conversor from './src/pages/Conversor';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'green',
          tabBarLabelStyle: { fontWeight: 'bold' },
          tabBarIndicatorStyle: { backgroundColor: 'green' },
        }}
      >
        <Tab.Screen name="Dólar">
          {() => <Conversor moeda="Dólar" taxa={0.17} />}
        </Tab.Screen>
        <Tab.Screen name="Euro">
          {() => <Conversor moeda="Euro" taxa={0.15} />}
        </Tab.Screen>
        <Tab.Screen name="Bitcoin">
          {() => <Conversor moeda="Bitcoin" taxa={1 / 550000} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
