import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import Icon from 'react-native-vector-icons/Ionicons';


const BottomNav = () => {
  return (
    <View style={styles.bottomNav}>
    <TouchableOpacity onPress={() => router.push('/home')}><Icon name="home-outline" size={30} color="#264E36" /></TouchableOpacity>
    <TouchableOpacity onPress={() => router.push('/search')}><Icon name="search-outline" size={30} color="#264E36" /></TouchableOpacity>
    <TouchableOpacity onPress={() => router.push('/add')} style={styles.addButton}><Icon name="add-outline" size={30} color="#fff" /></TouchableOpacity>
    <TouchableOpacity onPress={() => router.push('/bookmark')}><Icon name="bookmark-outline" size={30} color="#264E36" /></TouchableOpacity>
    <TouchableOpacity onPress={() => router.push('/profile')}><Icon name="person-outline" size={30} color="#264E36" /></TouchableOpacity>
</View>
  )
}

export default BottomNav

const styles = StyleSheet.create({
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 60,
        backgroundColor: '#F6F4EF',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    addButton: {
        backgroundColor: '#264E36',
        borderRadius: 30,
        padding: 10,
    },
})