import { StyleSheet } from 'react-native';

const fraseStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  switches: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  fraseContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  fraseTexto: {
    textAlign: 'center',
    fontStyle: 'italic',
    lineHeight: 30,
  },
});

export default fraseStyle;
