import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, SafeAreaView, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useUser } from './UserContext';
import BottomNav from '@/components/BottomNav';
import axios from 'axios'; 

export default function UserProfile() {
  const { user, setUser } = useUser(); 

  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [PhoneNumber, setPhoneNumber] = useState(user?.PhoneNumber || ''); 
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = async () => {
    try {
      // Mock server update, replace with actual server request
      // Assuming your backend API endpoint looks like '/api/users/updateProfile'
      const response = await axios.post('http://localhost:5000/api/users/updateProfile', {
        name,
        email,
        phone,
      }, {
        headers: {
          'x-auth-token': 'YOUR_AUTH_TOKEN', // Replace with actual auth token
        },
      });

      if (response.data.success) {
        Alert.alert('Profile updated successfully!');
        setUser(response.data.user); // Update the user context
        setIsEditing(false);
      } else {
        Alert.alert('Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      Alert.alert('Error updating profile');
    }
  };

  if (!user) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>User Profile</Text>
        
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Name:</Text>
            <TextInput
              style={styles.input}
              value={name}
              editable={isEditing}
              onChangeText={setName}
              placeholder="Enter your name"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>E-mail:</Text>
            <TextInput
              style={styles.input}
              value={email}
              editable={isEditing}
              onChangeText={setEmail}
              keyboardType="email-address"
              placeholder="Enter your email"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Phone:</Text>
            <TextInput
              style={styles.input}
              value={PhoneNumber}
              editable={isEditing}
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
              placeholder="Enter your phone number"
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setIsEditing(!isEditing)}
          >
            <Text style={styles.buttonText}>
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </Text>
          </TouchableOpacity>
          {isEditing && (
            <TouchableOpacity
              style={[styles.button, styles.saveButton]}
              onPress={handleSave}
            >
              <Text style={styles.buttonText}>Save Changes</Text>
            </TouchableOpacity>
          )}

      </ScrollView>
      <BottomNav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#264E36',
    marginBottom: 16,
    alignSelf: 'center',
  },
  profileInfo: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 3,
    marginBottom: 16,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 16,
    alignSelf: 'center',
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    backgroundColor: '#f9f9f9',
  },
  button: {
    backgroundColor: '#264E36',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignItems: 'center',
    marginVertical: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  saveButton: {
    backgroundColor: '#007BFF',
  },
});
