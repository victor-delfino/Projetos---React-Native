import React from 'react';
import { FlatList, TouchableOpacity, Text, Image } from 'react-native';
import { movieListStyles } from './movieListStyles';

export default function MovieList(props) {
  return (
    <FlatList
      data={props.movies}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={movieListStyles.movieContainer}
          onPress={() => props.navigation.navigate('MovieDetails', { movie: item })}
        >
          <Image
            source={{ uri: item.foto }}
            style={movieListStyles.movieImage}
          />
          <Text style={movieListStyles.movieTitle}>{item.nome}</Text>
          <Text style={movieListStyles.readMore}>Leia mais</Text>
        </TouchableOpacity>
      )}
    />
  );
}
