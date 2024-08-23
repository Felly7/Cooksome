import React, { useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, FlatList, ActivityIndicator, Image, Text, TouchableOpacity, StatusBar } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import BottomNav from '@/components/BottomNav';
import recipeData from '../assets/recipe.json';

const RecipeList = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams(); // Get the 'id' parameter from the route
  const ids = id.split(',');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBreakfastResults = (id) => {
      setLoading(true);
      try {
        // Filter the recipes based on the dishType and potentially the id
        const filteredResults = recipeData.filter(
          (recipe) =>  recipe.id === id
        );
        setResults(filteredResults);
        console.log(filteredResults)
      } catch (error) {
        console.error('Error fetching search results:', error);
      } finally {
        setLoading(false);
      }
    };
    if (id) {
      fetchBreakfastResults(id); // Fetch results when 'id' is available
    }
  }, [id]);

  const handlePress = (id) => {
    router.push(`/details?id=${id}`); // Navigate to details screen with the selected recipe's id
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.resultItem} onPress={() => handlePress(item.id)}>
      <Image style={styles.resultImage} source={{ uri: item.image }} />
      <Text style={styles.resultText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={results}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
      <BottomNav />
    </SafeAreaView>
  );
};

export default RecipeList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F4EF',
    padding: 16,
    marginTop: StatusBar.currentHeight,
  },
  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  resultImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 16,
  },
  resultText: {
    fontSize: 16,
  },
});
