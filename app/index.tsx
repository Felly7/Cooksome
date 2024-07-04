import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import firebase from '../firebase';
import { router } from 'expo-router';

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
  };

  return (
    <View style={styles.container}>
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
      <Button title="Login" onPress={handleLogin} />
      <Button title="Register" onPress={() => router.push('/register')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
  },
});

export default LoginScreen;
