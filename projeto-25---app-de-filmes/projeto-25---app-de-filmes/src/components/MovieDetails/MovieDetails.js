import React from 'react';
import { View, Text, Image } from 'react-native';
import { movieDetailsStyles } from './movieDetailsStyles';

export default function MovieDetails(props) {
  const movie = props.route.params.movie;

  return (
    <View style={movieDetailsStyles.container}>
      <Text style={movieDetailsStyles.title}>{movie.nome}</Text>
      <Image
        source={{ uri: movie.foto }}
        style={movieDetailsStyles.movieImage}
      />
      <Text style={movieDetailsStyles.sinopse}>Sinopse:</Text>
      <Text style={movieDetailsStyles.description}>{movie.sinopse}</Text>
    </View>
  );
}
