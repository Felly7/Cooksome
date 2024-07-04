import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
//import firebase from '../firebase';
import { router } from 'expo-router';
import { useFonts } from 'expo-font';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // firebase.auth().signInWithEmailAndPassword(email, password)
    //   .then(() => {
    //     console.log('User signed in!');
    //     navigation.navigate('Home');
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
    console.log("its working")
    router.push("(tabs)")
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.jpg")}
        style={styles.logo}
      />
      <Text style={styles.welcome}>Cooksome</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={{color: 'blue', marginTop: 30, fontSize: 15}} onPress={() => router.push('/register')}> Register</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    padding: 8,
    borderRadius: 10,
    fontSize: 18,
  },
  logo:{
    height: 150,
    width: 150,
    borderRadius: 999,
    position: 'absolute',
    top: 90,
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 999,
    marginTop: 10,
    width: '80%',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  welcome: {
    fontSize: 35,
    marginBottom: 70,
    marginTop: 5,
    fontWeight: 'bold',
    color: 'green'

  },
});

export default LoginScreen;
