import { router } from 'expo-router';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image, SafeAreaView, StatusBar, ActivityIndicator, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useUser } from './UserContext';
import BottomNav from '@/components/BottomNav';

export default function ProfileScreen() {
  const user = useUser();

  const handleLogout = () => {
    Alert.alert(
      "Log Out",
      "Are you sure you want to log out?",
      [
        {
          text: "No",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Yes", onPress: () => router.push('/') }
      ],
      { cancelable: false }
    );
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
        <Text style={styles.title}>Settings</Text>

        <TouchableOpacity style={styles.item} onPress={() => router.push('UserProfile')}>
          <Icon name="person-outline" size={40} color="#264E36" />
    
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemTitle}>User Profile</Text>
          <Text style={styles.itemSubtitle}>Email, Phone, Addresses, and Identity</Text>
        </View>
        <Icon name="chevron-right" size={40} color="#ccc" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => router.push('SecurityScreen')}>
        <Icon name="security" size={40} color="#264E36" />
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemTitle}>Security and Privacy</Text>
          <Text style={styles.itemSubtitle}>Passcodes, Fingerprints, and Privacy</Text>
        </View>
        <Icon name="chevron-right" size={40} color="#ccc" />
      </TouchableOpacity>
     
     
      <TouchableOpacity style={styles.item} onPress={() => router.push('HelpSupport')}>
        <Icon name="help-outline" size={40} color="#264E36" />
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemTitle}>Help and Support</Text>
          <Text style={styles.itemSubtitle}>For any question, contact us</Text>
        </View>
        <Icon name="chevron-right" size={40} color="#ccc" />
      </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={handleLogout}>
        <Icon name="logout" size={40} color="#264E36" />
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemTitle}>Log out</Text>
        </View>
        <Icon name="chevron-right" size={40} color="#ccc" />
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
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 30,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  profileImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: 'gray',
  },
  status: {
    fontSize: 16,
    color: 'blue',
  },
  preferencesTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemTextContainer: {
    flex: 1,
    marginLeft: 16,
  },
  itemTitle: {
    fontSize: 16,
  },
  itemSubtitle: {
    fontSize: 14,
    color: 'gray',
  },
});
