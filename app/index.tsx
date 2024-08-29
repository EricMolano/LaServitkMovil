import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground } from 'react-native';

export default function MenuScreen() {
  return (
    <ImageBackground
      source={require('../assets/images/servilogo.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <LinearGradient
        colors={['rgba(176, 190, 197, 0.9)', 'rgba(255, 0, 0, 0.6)', 'rgba(0, 191, 255, 0.4)', 'rgba(255, 255, 255, 0.6)']}
        style={styles.gradient}
      >
        <View style={styles.container}>
          <Text style={styles.title}>La Servtik</Text>
          <Link href="/Register" style={styles.button}>
            <Text style={styles.buttonText}>Registro</Text>
          </Link>
          <Link href="/Login" style={styles.button}>
            <Text style={styles.buttonText}>Ingreso de Usuario</Text>
          </Link>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
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
    color: '#FF0000',
    fontWeight: 'bold',
  },
  button: {
    width: '80%',
    padding: 15,
    backgroundColor: '#FF0000',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
    minWidth: 200, // Ajuste para mejorar la visibilidad en Android
    height: 50, // Ajuste para mejorar la visibilidad en Android
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});
