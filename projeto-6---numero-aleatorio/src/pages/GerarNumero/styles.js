import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  area: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f5',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 15,
    borderRadius: 75,
  },
  prompt: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 15,
  },
  input: {
    width: '80%',
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center',
  },
  resultText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#007bff',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default styles;
