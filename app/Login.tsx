import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { LoginStyles } from '../styles/Login'; // Importa los estilos desde el archivo independiente

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Inicio de sesión exitoso');
      router.replace('/HomeScreen');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      Alert.alert('Error', 'Correo electrónico o contraseña incorrectos.');
    }
  };

  return (
    <ImageBackground
      source={require('../assets/images/servilogo.png')}
      style={LoginStyles.backgroundImage}
      resizeMode="cover"
    >
      <LinearGradient
        colors={['rgba(176, 190, 197, 0.9)', 'rgba(255, 0, 0, 0.6)', 'rgba(0, 191, 255, 0.4)', 'rgba(255, 255, 255, 0.6)']}
        style={LoginStyles.gradient}
      >
        <View style={LoginStyles.container}>
          <Text style={LoginStyles.title}>Inicio de Sesión</Text>
          <TextInput
            style={LoginStyles.input}
            placeholder="Correo electrónico"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={LoginStyles.input}
            placeholder="Contraseña"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={LoginStyles.button} onPress={handleLogin}>
            <Text style={LoginStyles.buttonText}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}
