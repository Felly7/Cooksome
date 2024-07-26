import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';
import { useUser } from './UserContext';
import BottomNav from '@/components/BottomNav';


export default function UserProfile() {
  const {user} = useUser();

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
      <View style={styles.profileInfo}>
        {/* <Image
          style={styles.profileImage}
          source={{ uri: user.profileImage }}
        /> */}
        <View>
          <Text style={styles.name}>Name: {user?.name}</Text>
          <Text style={styles.email}>E-mail: {user?.email}</Text>
        </View>
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
    marginLeft: 10,
    
},
  email: {
    fontSize: 18,
    marginLeft: 10,
    color: '#000',
  },
});
