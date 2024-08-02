// screens/RegisterScreen.js
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { registerUser } from '../services/api';
import { GoogleSignIn} from '../app/GoogleSignIn';

const loadFonts = () => {
  return Font.loadAsync({
    'TiltPrism-Regular': require('../assets/fonts/TiltPrism-Regular.ttf'),
  });
};
const RegisterScreen = () => {
  const [FirstName, setFirstName] = useState('');
  const [ PhoneNumber, setPhoneNumber] = useState ('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const data = await registerUser(FirstName, email, password);
      console.log('Registration successful', data);
      // Save token to secure storage or context
      router.push('/');
    } catch (error) {
      alert(error.error || 'Registration failed');
    }
  };

  const [fontsLoaded, setFontsLoaded] = useState(false);
  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }


  return (
    <View style={styles.container}>
       <Image style={styles.logoImage} source= {require('../assets/images/logo.jpg')}/>
      <Text style={styles.logoText}>CookSome</Text>
      <Text style={styles.title}>Create an Account</Text>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          autoCorrect={false}
          value={FirstName}
          onChangeText={setFirstName}
        />
        <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="numeric"
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={setPhoneNumber}
        />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={() => router.push('/')}>
        <Text style={styles.loginText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#264E36',
    padding: 16,
  },
  logoText: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 32,
  },
  input: {
    width: '100%',
    height: 48,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginVertical: 8,
    fontSize: 16,
    color: '#000',
  },
  button: {
    width: '100%',
    height: 48,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
  buttonText: {
    color: '#264E36',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginButton: {
    marginTop: 16,
  },
  loginText: {
    color: '#fff',
  },
  logoImage: {
    width: 150,
    height: 150,
    marginBottom: 32,
    marginTop: -45,
    resizeMode: 'contain',
    alignSelf: 'center',
    borderRadius: 999
  },
});

export default RegisterScreen;
