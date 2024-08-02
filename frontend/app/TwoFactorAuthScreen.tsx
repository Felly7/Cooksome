import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import axios from 'axios';

export default function TwoFactorAuthScreen() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);

  const requestVerificationCode = async () => {
    if (phoneNumber.length !== 10) {
      Alert.alert('Please enter a valid 10-digit phone number.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/twoFactor/request-verification-code', {
        phone: phoneNumber,
      }, {
        headers: {
          'x-auth-token': '7fdaaa67ddec246c8607ee8b0a9be611', // Replace with actual auth token
        },
      });

      if (response.data.success) {
        Alert.alert('Verification code sent!');
        setIsCodeSent(true);
      }
    } catch (error) {
      console.error('Error requesting verification code:', error);
      Alert.alert('Failed to send verification code');
    }
  };

  const verifyCode = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/twoFactor/verify-code', {
        phone: phoneNumber,
        code: verificationCode,
      }, {
        headers: {
          'x-auth-token': '7fdaaa67ddec246c8607ee8b0a9be611', // Replace with actual auth token
        },
      });

      if (response.data.success) {
        Alert.alert('Phone verified successfully!');
      } else {
        Alert.alert('Invalid code');
      }
    } catch (error) {
      console.error('Error verifying code:', error);
      Alert.alert('Failed to verify code');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Two-Factor Authentication</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="numeric"
        maxLength={10} // Limit input to 10 characters
      />
      <Button title="Request Code" onPress={requestVerificationCode} />
      {isCodeSent && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Enter verification code"
            value={verificationCode}
            onChangeText={setVerificationCode}
            keyboardType="numeric"
            maxLength={6} // Assuming verification code is 6 digits
          />
          <Button title="Verify Code" onPress={verifyCode} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
    fontSize: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});
