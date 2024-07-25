import { router } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';

export default function SecurityScreen() {
  const [is2FAEnabled, setIs2FAEnabled] = React.useState(false);
  const [isSecureLaunchEnabled, setIsSecureLaunchEnabled] = React.useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Security and Privacy</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Security Status</Text>
        <View style={styles.switchRow}>
          <Text>Two-Factor Authentication</Text>
          <Switch value={is2FAEnabled} onValueChange={setIs2FAEnabled} />
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
