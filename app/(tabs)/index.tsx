// screens/HomeScreen.js
import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
        <Text style={styles.title}>Embark on Your Cooking Journey</Text>
        <TextInput
            style={styles.searchInput}
            placeholder="Search"
        />
        <View style={styles.categoryContainer}>
            <Text style={styles.categoryText}>Special</Text>
            <Text style={styles.categoryText}>Breakfast</Text>
            <Text style={styles.categoryText}>Lunch</Text>
            <Text style={styles.categoryText}>Dinner</Text>
        </View>
        <Text style={styles.subtitle}>Need to try</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
            <View style={styles.card}>
            <Image style={styles.image} source={require('../../assets/images/jollof.jpg')} />
            <Text style={styles.cardTitle}>Jollof</Text>
            <Text style={styles.cardDescription}>Red hot tasty jollof rice.</Text>
            </View>
            <View style={styles.card}>
            <Image style={styles.image} source={require('../../assets/images/pasta.jpg')} />
            <Text style={styles.cardTitle}>Pasta</Text>
            <Text style={styles.cardDescription}>Ghanaian style spaghetti with shrimp and tomato sauce.</Text>
            </View>
        </ScrollView>
        <Text style={styles.subtitle}>Cook in 15mins selection</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
            <View style={styles.card}>
            <Image style={styles.image} source={require('../../assets/images/friedyam.jpg')} />
            <Text style={styles.cardTitle}>Fried Yam</Text>
            <Text style={styles.cardDescription}>Crispy fried yam with ketchup.</Text>
            </View>
            <View style={styles.card}>
            <Image style={styles.image} source={require('../../assets/images/tombrown.jpg')} />
            <Text style={styles.cardTitle}>Tom Brown</Text>
            <Text style={styles.cardDescription}>Quick fix breakfast before going to class.</Text>
            </View>
        </ScrollView>
        </ScrollView>
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
  searchInput: {
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  categoryText: {
    fontSize: 16,
    color: '#264E36',
  },
  subtitle: {
    fontSize: 18,
    color: '#264E36',
    marginBottom: 16,
  },
  scrollContainer: {
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginRight: 16,
    width: 200,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
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
});

export default HomeScreen;
