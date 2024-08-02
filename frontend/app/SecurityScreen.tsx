import { router } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import BottomNav
 from '@/components/BottomNav';
export default function SecurityScreen() {
  const [is2FAEnabled, setIs2FAEnabled] = React.useState(false);
  const [isSecureLaunchEnabled, setIsSecureLaunchEnabled] = React.useState(true);

  const handle2FAToggle = (value) => {
    setIs2FAEnabled(value);
    if (value) {
      router.push('TwoFactorAuthScreen');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Text style={styles.title}>Security and Privacy</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Security Status</Text>
        <View style={styles.switchRow}>
          <Text>Two-Factor Authentication</Text>
          <Switch value={is2FAEnabled} onValueChange={handle2FAToggle} />
        </View>
        <View style={styles.switchRow}>
          <Text>Secure Launch</Text>
          <Switch value={isSecureLaunchEnabled} onValueChange={setIsSecureLaunchEnabled} />
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Login and Passcode</Text>
        <TouchableOpacity style={styles.item} onPress={() => router.push('ChangePasscode')}>
          <Text style={styles.itemText}>Change Passcode</Text>
        </TouchableOpacity>
        {/* Add other settings items here */}
      </View>
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
  },
  section: {
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  item: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
  },
});
