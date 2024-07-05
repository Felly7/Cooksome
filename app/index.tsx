// screens/LoginScreen.js
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity,Image } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';


const loadFonts = () => {
  return Font.loadAsync({
    'TiltPrism-Regular': require('../assets/fonts/TiltPrism-Regular.ttf'),
  });
};

const LoginScreen = () => {

  const handlelogin =()=>{
    router.push('(tabs)')
  }

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
      <Text style={styles.title}>Chef up your own dish with Cooksome</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TouchableOpacity style={styles.button} onPress={handlelogin}>
        <Text style={styles.buttonText}>Explore the app</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgotText}>Forgot password?</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.registerText}>Don't have an account?
          <TouchableOpacity onPress={()  => router.push('/register')}>
            <Text style={{color: 'white', marginBottom: -4, marginLeft: 5}}>Register</Text>
          </TouchableOpacity>
        </Text>
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
    fontSize: 42,
    color: 'white',
    marginBottom: 32,
    fontFamily: 'TiltPrism-Regular'
  },
  title: {
    fontSize: 17,
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,

  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
  buttonText: {
    color: '#264E36',
  },
  forgotText: {
    color: 'white',
    marginVertical: 8,
  },
  registerText: {
    color: 'white',
  },
  logoImage: {
    width: 150,
    height: 150,
    marginBottom: 32,
    marginTop: -45,
    resizeMode: 'contain',
    alignSelf: 'center',
    borderRadius: 999
  }
});

export default LoginScreen;
