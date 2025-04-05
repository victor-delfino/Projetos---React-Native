import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  cargo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 5,
  },
  descricao: {
    fontSize: 14,
    color: '#4b5563',
    marginBottom: 8,
  },
  salario: {
    fontSize: 14,
    color: '#16a34a',
    fontWeight: '600',
  },
});

export default styles;
