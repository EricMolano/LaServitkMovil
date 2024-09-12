import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { getAuth, onAuthStateChanged, signOut, User } from 'firebase/auth'; // Asegúrate de importar User
import { useRouter } from 'expo-router';
import { HomeScreenStyles } from '../styles/HomeScreen'; // Asegúrate de importar los estilos correctos

export default function HomeScreen() {
  const [user, setUser] = useState<User | null>(null); // Declara el estado del usuario como User o null
  const router = useRouter();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        router.replace('/Login');
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    router.replace('/Login');
  };

  return (
    <View style={HomeScreenStyles.container}>
      <ImageBackground
        source={require('../assets/images/servilogo.png')} // Asegúrate de que la ruta sea correcta
        style={HomeScreenStyles.backgroundImage}
        resizeMode="cover"
      >
        <LinearGradient
          colors={['rgba(176, 190, 197, 0.9)', 'rgba(255, 0, 0, 0.6)', 'rgba(0, 191, 255, 0.4)', 'rgba(255, 255, 255, 0.6)']}
          style={HomeScreenStyles.gradient}
        >
          <View style={HomeScreenStyles.container}>
            <Text style={HomeScreenStyles.title}>¡Bienvenido, {user?.email}!</Text>
            <TouchableOpacity onPress={handleLogout} style={HomeScreenStyles.logoutButton}>
              <Text style={HomeScreenStyles.logoutButtonText}>Cerrar Sesión</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>

      {/* Barra de navegación */}
      <View style={HomeScreenStyles.navBar}>
        <TouchableOpacity style={HomeScreenStyles.navButton}>
          <Text style={HomeScreenStyles.navButtonText}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={HomeScreenStyles.navButton}>
          <Text style={HomeScreenStyles.navButtonText}>Servicios</Text>
        </TouchableOpacity>
        <TouchableOpacity style={HomeScreenStyles.navButton}>
          <Text style={HomeScreenStyles.navButtonText}>Vehículos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={HomeScreenStyles.navButton}>
          <Text style={HomeScreenStyles.navButtonText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}