import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import BottomNav from '@/components/BottomNav'

const profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>profile</Text>
      <BottomNav />
    </SafeAreaView>
  )
}

export default profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F4EF',
    padding: 16,
    marginTop: StatusBar.currentHeight,
  }
})