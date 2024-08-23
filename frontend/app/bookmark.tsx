import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { router } from 'expo-router';
import BottomNav from '@/components/BottomNav';


const BookmarkScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>Bookmarked Recipes</Text>
                <Text style={styles.subtitle}>Recently Viewed</Text>
                {/* Add bookmarked recipes here */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Recipe Name</Text>
                    <Text style={styles.cardDescription}>Description of the bookmarked recipe.</Text>
                </View>
                <Text style={styles.subtitle}>Made It</Text>
                {/* Add made recipes here */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Recipe Name</Text>
                    <Text style={styles.cardDescription}>Description of the made recipe.</Text>
                </View>
            </ScrollView>
          <BottomNav />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F4EF',
        padding: 16,
        marginTop: StatusBar.currentHeight,
    },
    title: {
        fontSize: 24,
        color: '#264E36',
        marginBottom: 16,
    },
    subtitle: {
        fontSize: 18,
        color: '#264E36',
        marginBottom: 16,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
    },
    cardTitle: {
        fontSize: 16,
        color: '#264E36',
        marginBottom: 4,
    },
    cardDescription: {
        fontSize: 14,
        color: '#767676',
    },
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
});

export default BookmarkScreen;
