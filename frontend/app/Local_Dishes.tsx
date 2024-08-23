import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import BottomNav from '@/components/BottomNav';
import recipes from '../assets/recipe.json';
import { router } from 'expo-router';

export default function GhanaianMealsScreen() {
  const [breakfastIds, setBreakfastIds] = useState([]);

  const getBreakfast = () => {
    const breakfastDishes = recipes.filter(recipe => recipe.dishType.includes("breakfast"));
    const breakfastDishIds = breakfastDishes.map(dish => dish.id); // Assuming each recipe has an 'id' field
  
    if (breakfastDishIds.length > 0) {
      const serializedIds = breakfastDishIds.join(','); // Serialize IDs to a comma-separated string
      setBreakfastIds(breakfastDishIds); // Store IDs in the state (optional if not needed later)
      console.log(breakfastDishIds)
      router.push(`/recipeList?id=${serializedIds}`); // Pass serialized IDs in the URL
    } else {
      console.warn('No breakfast dishes found');
      // Handle the case when no breakfast dishes are found (optional)
    }
  };
  
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
      <Text style={styles.heading}>Ghanaian Meals</Text>

      <TouchableOpacity onPress={getBreakfast}>
        <BlurView intensity={50} style={styles.menuItem}>
          <View style={[styles.menuItemContent, { backgroundColor: '#d8e4bc' }]}>
            <Text style={styles.label}>Breakfast</Text>
            <Image
              style={styles.image}
              source={require('./../assets/images/Breakfast1.png')}
            />
          </View>
       </BlurView>
      </TouchableOpacity>

      <BlurView intensity={50} style={styles.menuItem}>
        <View style={[styles.menuItemContent, { backgroundColor: '#e3d8f1' }]}>
          <Text style={styles.label}>Lunch</Text>
          <Image
            style={styles.image}
            source={require('./../assets/images/Lunch.png')}
          />
        </View>
      </BlurView>

      <BlurView intensity={50} style={styles.menuItem}>
        <View style={[styles.menuItemContent, { backgroundColor: '#f5e3d7' }]}>
          <Text style={styles.label}>Supper</Text>
          <Image
            style={styles.image}
            source={require('./../assets/images/Supper.png')}
          />
        </View>
      </BlurView>
    </ScrollView>
    <BottomNav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F4EF',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  menuItem: {
    marginBottom: 16,
    borderRadius: 10,
  },
  menuItemContent: {
    borderRadius: 10,
    padding: 16,
    height: 170,
  },
  image: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 200,
    height: 170,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  label: {
    flex: 1,
    fontSize: 45,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 10,
  },
});
