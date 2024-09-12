import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { IndexScreenStyles } from '../styles/menu'; // Importa los estilos desde el archivo independiente

export default function IndexScreen() {
  return (
    <ImageBackground
      source={require('../assets/images/servilogo.png')}
      style={IndexScreenStyles.backgroundImage}
      resizeMode="cover"
    >
      <LinearGradient
        colors={['rgba(176, 190, 197, 0.9)', 'rgba(255, 0, 0, 0.6)', 'rgba(0, 191, 255, 0.4)', 'rgba(255, 255, 255, 0.6)']}
        style={IndexScreenStyles.gradient}
      >
        <View style={IndexScreenStyles.container}>
          <Text style={IndexScreenStyles.title}>La Servtik</Text>
          <Link href="/Register" style={IndexScreenStyles.button}>
            <Text style={IndexScreenStyles.buttonText}>Registro</Text>
          </Link>
          <Link href="/Login" style={IndexScreenStyles.button}>
            <Text style={IndexScreenStyles.buttonText}>Ingreso de Usuario</Text>
          </Link>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}
