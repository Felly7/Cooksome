import React, { useState, useEffect } from 'react';
import { View, Button, Alert } from 'react-native';
import * as Keychain from 'react-native-keychain';

const BiometricAuthScreen = () => {
  const [biometricSupported, setBiometricSupported] = useState(false);

  useEffect(() => {
    (async () => {
      const supported = await Keychain.getSupportedBiometryType();
      setBiometricSupported(!!supported);
    })();
  }, []);

  const handleBiometricAuth = async () => {
    try {
      const credentials = await Keychain.getGenericPassword({
        authenticationPrompt: {
          title: 'Authentication Required',
          subtitle: 'Use your biometric authentication to sign in',
        },
      });

      if (credentials) {
        Alert.alert('Authenticated successfully');
      } else {
        Alert.alert('Authentication failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      {biometricSupported && (
        <Button title="Authenticate with Biometrics" onPress={handleBiometricAuth} />
      )}
    </View>
  );
};

export default BiometricAuthScreen;
