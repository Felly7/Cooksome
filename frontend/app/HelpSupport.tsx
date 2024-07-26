import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function HelpSupportScreen() {
  const handleEmailPress = () => {
    Linking.openURL('mailto:adukorankye@gmail.com');
  };

  const handlePhonePress = () => {
    Linking.openURL('tel:+(233)246363333');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Help and Support</Text>
      <Text style={styles.subtitle}>We are here to help you with any questions or issues you may have.</Text>
      <TouchableOpacity style={styles.item} onPress={handleEmailPress}>
        <Text style={styles.itemText}>Email: adukorankye16@gmail.com</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={handlePhonePress}>
        <Text style={styles.itemText}>Phone: +(233) 246-36-3333</Text>
      </TouchableOpacity>
    </View>
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
  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 16,
  },
  item: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
    color: '#264E36',
  },
});
