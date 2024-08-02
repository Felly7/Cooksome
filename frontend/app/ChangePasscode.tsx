import { router } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import BottomNav
 from '@/components/BottomNav';
export default function ChangePasscodeScreen() {
  const [oldPasscode, setOldPasscode] = React.useState('');
  const [newPasscode, setNewPasscode] = React.useState('');
  const [confirmPasscode, setConfirmPasscode] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Text style={styles.title}>Change Passcode</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        placeholder="Enter Old Passcode"
        value={oldPasscode}
        onChangeText={setOldPasscode}
      />
      <TextInput
        style={styles.input}
        secureTextEntry
        placeholder="Create New Passcode"
        value={newPasscode}
        onChangeText={setNewPasscode}
      />
      <TextInput
        style={styles.input}
        secureTextEntry
        placeholder="Re-enter New Passcode"
        value={confirmPasscode}
        onChangeText={setConfirmPasscode}
      />
      <TouchableOpacity style={styles.button} onPress={() => {/* handle passcode change */}}>
        <Text style={styles.buttonText}>Change Passcode</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.backText}>Take me back</Text>
      </TouchableOpacity>
      </ScrollView>
        <BottomNav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 16,
    borderRadius: 4,
  },
  button: {
    backgroundColor: '#264E36',
    padding: 16,
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backText: {
    color: '#264E36',
    marginTop: 16,
    textAlign: 'center',
  },
});
