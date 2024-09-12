import { StyleSheet } from 'react-native';

export const HomeScreenStyles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    width: '100%', // Asegura que la imagen de fondo cubra todo el ancho
    height: '100%', // Asegura que la imagen de fondo cubra toda la altura
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
  logoutButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#FF0000',
    borderRadius: 5,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Alinea los botones horizontalmente
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    position: 'absolute',
    bottom: 0,
    width: '100%', // Asegura que la barra de navegación cubra todo el ancho
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  navButtonText: {
    fontSize: 16,
    color: '#000',
  },
});
