import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 16,
  },
  card: {
    width: 200,
    padding: 10,
    marginRight: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    alignItems: 'center',
  },
  imagem: {
    width: 150,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  nome: {
    fontSize: 18,
    marginBottom: 10,
  },
});
