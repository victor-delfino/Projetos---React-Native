import { StyleSheet } from 'react-native';

export const movieListStyles = StyleSheet.create({
  movieContainer: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  movieImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  readMore: {
    color: 'green',
    textDecorationLine: 'underline',
  },
});