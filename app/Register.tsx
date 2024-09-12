import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { auth } from '../firebaseConfig'; // Asegúrate de importar la configuración de Firebase
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Importa la función correcta
import { RegisterStyles } from '../styles/Register'; // Importa los estilos

const db = getFirestore();

const validatePassword = (password: string) => {
  // La contraseña debe tener al menos 6 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial
  const minLength = 6;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
};

export default function Register() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden.');
      return;
    }

    if (!validatePassword(password)) {
      Alert.alert('Error', 'La contraseña debe tener al menos 6 caracteres, incluir una letra mayúscula, una letra minúscula, un número y un carácter especial.');
      return;
    }

    try {
      // Crea un usuario con Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Almacena los detalles del usuario en la base de datos
      await setDoc(doc(db, 'users', user.uid), {
        username: username,
        email: email,
        password: password // Este campo se mantiene como solicitaste
      });

      console.log('Usuario registrado:', user);

      // Redirige al usuario a la pantalla de inicio de sesión
      router.replace('/Login');
    } catch (error: any) { // Usar `any` para manejar el error
      console.error('Error al registrar usuario:', error);

      // Manejo del error
      let errorMessage = 'No se pudo registrar el usuario.';
      
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = 'El correo electrónico ya está en uso.';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'El correo electrónico no es válido.';
      } else if (error.code === 'auth/weak-password') {
        errorMessage = 'La contraseña debe tener al menos 6 caracteres.';
      }

      Alert.alert('Error', errorMessage);
    }
  };

  return (
    <ImageBackground
      source={require('../assets/images/servilogo.png')}
      style={RegisterStyles.backgroundImage}
      resizeMode="cover"
    >
      <LinearGradient
        colors={['rgba(176, 190, 197, 0.9)', 'rgba(255, 0, 0, 0.6)', 'rgba(0, 191, 255, 0.4)', 'rgba(255, 255, 255, 0.6)']}
        style={RegisterStyles.gradient}
      >
        <View style={RegisterStyles.container}>
          <Text style={RegisterStyles.title}>Registro de Usuario</Text>
          <TextInput
            style={RegisterStyles.input}
            placeholder="Nombre de Usuario"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={RegisterStyles.input}
            placeholder="Correo electrónico"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <TextInput
            style={RegisterStyles.input}
            placeholder="Contraseña"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
          />
          <TextInput
            style={RegisterStyles.input}
            placeholder="Confirmar Contraseña"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            autoCapitalize="none"
          />
          <TouchableOpacity style={RegisterStyles.button} onPress={handleRegister}>
            <Text style={RegisterStyles.buttonText}>Registrar</Text>
          </TouchableOpacity>
          <Text style={RegisterStyles.termsText}>
            Al registrarse acepta nuestros términos y condiciones.
          </Text>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}
