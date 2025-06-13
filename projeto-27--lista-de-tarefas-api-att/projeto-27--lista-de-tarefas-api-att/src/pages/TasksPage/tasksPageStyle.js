import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#222',
    textAlign: 'center',
  },
  empty: {
    color: '#bbb',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 40,
  },
  addButton: {
    position: 'absolute',
    right: 24,
    bottom: 40,
    backgroundColor: '#4f63ac',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
});