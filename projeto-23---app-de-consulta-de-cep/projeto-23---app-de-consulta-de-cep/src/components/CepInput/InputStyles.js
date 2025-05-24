
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  cep: {
    width: 200,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  botao: {
    backgroundColor: 'green',
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  botaoLimpar: {
    backgroundColor: '#cc0000',
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: 5,
  },
});