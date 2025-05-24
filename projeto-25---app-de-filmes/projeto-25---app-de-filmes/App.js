import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import { globalStyles } from './src/styles/globalStyles';
import MovieList from './src/components/MovieList/MovieList';
import MovieDetails from './src/components/MovieDetails/MovieDetails';
import LoadingScreen from './src/components/LoadingScreen/LoadingScreen';
import api from './src/services/api';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await api.get('/?api=filmes');
        setMovies(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao carregar filmes:', error);
        setLoading(false);
      }
    }

    fetchMovies();
  }, []);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>App de Filmes</Text>

      {loading ? (
        <LoadingScreen />
      ) : (
        <MovieList movies={movies} navigation={navigation} />
      )}
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Filmes' }} />
        <Stack.Screen name="MovieDetails" component={MovieDetails} options={{ title: 'Detalhes' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
