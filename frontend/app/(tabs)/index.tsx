import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image, SafeAreaView, StatusBar, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import { useUser } from '../UserContext';
import { getFoodData } from '../../services/api';
import { router } from 'expo-router';



const HomeScreen = () => {
const { user } = useUser();
 const [foodData, setFoodData] = useState([]);
 const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        const data = await getFoodData();
        setFoodData(data.results);
      } catch (error) {
        console.error('Failed to fetch food data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFoodData();
  }, []);

  const handleFoodDetails = (id) => {
    router.push(`/details?id=${id}`);
  };

    if (loading) {
      return (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleFoodDetails(item.id)}>
          <View style={styles.card}>
            <Image style={styles.image} source={{ uri: item.image }} />
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDescription}>Delicious {item.title} recipe.</Text>
          </View>
      </TouchableOpacity>
    );


  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
        <Text style={styles.title}>Embark on Your Cooking Journey, <Text style={styles.name}>{user?.name}</Text></Text>
        <TextInput
            style={styles.searchInput}
            placeholder="Search"
        />
        <Text style={styles.category}>  Categories </Text>
        <View style={styles.categoryContainer}>
            <Text style={styles.categoryText}>Special</Text>
            <Text style={styles.categoryText}>Breakfast</Text>
            <Text style={styles.categoryText}>Lunch</Text>
            <Text style={styles.categoryText}>Dinner</Text>
        </View>
        <Text style={styles.subtitle}>Need to try</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
              <FlatList
                data={foodData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
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
    fontSize: 16,
    color: '#264E36',
    marginBottom: 16,
  },
name: {
  fontSize: 20,
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
  category: {
      fontSize: 22,
      fontWeight: 'bold',
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
