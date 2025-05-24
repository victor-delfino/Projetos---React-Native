import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  item: {
    backgroundColor: '#eee',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    flex: 1,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
  },
  actions: {
    flexDirection: 'row',
  },
  actionsButton: {
    marginRight: 10,
  },
});
