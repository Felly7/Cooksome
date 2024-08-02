import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const RequestCode = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const requestVerificationCode = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/twoFactor/request-verification-code', {
        phone: phoneNumber,
      }, {
        headers: {
          'x-auth-token': 'YOUR_AUTH_TOKEN', // Replace with your token
        },
      });

      if (response.data.success) {
        Alert.alert('Verification code sent!');
      }
    } catch (error) {
      console.error('Error requesting verification code:', error);
      Alert.alert('Failed to send verification code');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Enter your phone number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />
      <Button title="Request Code" onPress={requestVerificationCode} />
    </View>
  );
};

export default RequestCode;
