import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  inputRow: {
    flexDirection: 'row',
    marginBottom: 20,
    width: '100%',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 10,
    height: 40,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  botao: {
    backgroundColor: '#228B22',
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});