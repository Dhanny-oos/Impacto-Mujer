import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implementa la lógica de inicio de sesión aquí
    console.log('Usuario:', username);
    console.log('Contraseña:', password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenida!</Text>
      <Image 
        source={require('../../assets/logo-IM.png')} // Asegúrate de que esta ruta sea correcta
        style={styles.image}
        resizeMode="contain"
      />
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.linkText}>¿No tienes una cuenta? Regístrate</Text>
      </TouchableOpacity>
      <StatusBar style="auto" backgroundColor="#E1AFD1" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1AFD1',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 36,
    textAlign: 'center',
    marginBottom: 50,
    color: '#FF007F',
    fontWeight: 'bold',
    textShadowColor: '#fff',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 100,
    marginTop: 100,
  },
  input: {
    width: '100%',
    padding: 13,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15, // Mayor borderRadius
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#FF007F',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkText: {
    color: '#00033',
    fontSize: 16,
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});

export default Login;
