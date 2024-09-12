import { StyleSheet } from 'react-native';

export const IndexScreenStyles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 40,
    color: '#0F0E0E',
    fontWeight: 'bold',
  },
  button: {
    width: '80%',
    padding: 15,
    backgroundColor: '#FF0000',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
    minWidth: 200,
    height: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});
