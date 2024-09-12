import { StyleSheet } from 'react-native';

export const RegisterStyles = StyleSheet.create({
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
    width: '100%',
    maxWidth: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#000000',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#FF0000',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  termsText: {
    marginTop: 20,
    color: '#000000',
    fontSize: 14,
  },
});
