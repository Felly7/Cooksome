import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, SafeAreaView, ScrollView } from 'react-native';
import BottomNav
 from '@/components/BottomNav';
export default function HelpSupportScreen() {
  const handleEmailPress = () => {
    Linking.openURL('mailto:adukorankye@gmail.com');
  };

  const handlePhonePress = () => {
    Linking.openURL('tel:+(233)506514687');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Text style={styles.title}>Help and Support</Text>
      <Text style={styles.subtitle}>We are here to help you with any questions or issues you may have. Please reach out to us by our email or phone number below.</Text>
      <Text style = {styles.subtitle}>Should you search for any recipe and you do not find it, please reach us via our email and send us the name of those recipes. We will make sure to add them for you.</Text>
      <TouchableOpacity style={styles.item} onPress={handleEmailPress}>
        <Text style={styles.itemText}>Email: adukorankye16@gmail.com</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={handlePhonePress}>
        <Text style={styles.itemText}>Phone: +(233) 506-51-4687</Text>
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
