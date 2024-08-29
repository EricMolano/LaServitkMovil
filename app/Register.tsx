import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { account, databases } from './appwriteConfig'; // Asegúrate de importar la configuración

export default function Register() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleRegister = async () => {
    try {
      // Crea un usuario y una sesión
      const user = await account.create('unique()', email, password);
      console.log('Usuario registrado:', user);

      // Almacena los detalles del usuario en la base de datos
      await databases.createDocument(
        '66cff1df0036000137e6',  // Reemplaza con tu ID de base de datos
        '66cff285000be3f7f8ff', // Reemplaza con tu ID de colección
        user.$id,  // Usa el ID del usuario creado por Appwrite como ID del documento
        {
          userId: user.$id,  // Incluye el userId
          Username: username,
          Email: email,
          Password: password  // Incluye el campo Password si es requerido en la colección
        }
      );

      // Redirige al usuario a la pantalla de inicio de sesión
      router.push('/Login');
    } catch (error) {
      console.error('Error al registrar usuario:', error);
    }
  };

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
          <Text style={styles.title}>Registro de Usuario</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre de Usuario"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Registrar</Text>
          </TouchableOpacity>
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
    width: '100%',
    maxWidth: 400, // Ajuste para limitar el ancho en dispositivos grandes
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#FF0000',
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
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
