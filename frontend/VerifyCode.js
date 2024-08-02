import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const VerifyCode = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  const verifyCode = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/twoFactor/verify-code', {
        phone: phoneNumber,
        code: verificationCode,
      }, {
        headers: {
          'x-auth-token': '7fdaaa67ddec246c8607ee8b0a9be611',
        },
      });

      if (response.data.success) {
        Alert.alert('Phone verified successfully!');
      }
    } catch (error) {
      console.error('Error verifying code:', error);
      Alert.alert('Failed to verify code');
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
      <TextInput
        placeholder="Enter verification code"
        value={verificationCode}
        onChangeText={setVerificationCode}
        keyboardType="number-pad"
      />
      <Button title="Verify Code" onPress={verifyCode} />
    </View>
  );
};

export default VerifyCode;
