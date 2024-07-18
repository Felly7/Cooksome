import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator, ScrollView } from 'react-native';
import { getFoodDetails } from '../services/api';
import { useLocalSearchParams } from 'expo-router';

const DetailsScreen = () => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useLocalSearchParams();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await getFoodDetails(id);
        if (data.summary) {
                data.summary = data.summary
                  .replace(/<\/?b>/g, '')
                  .replace(/<a href="[^"]*">([^<]*)<\/a>/g, '$1');
        }

        setDetails(data);
      } catch (error) {
        console.error('Failed to fetch food details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id]);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!details) {
    return (
      <View style={styles.container}>
        <Text>No details available.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.image} source={{ uri: details.image }} />
      <Text style={styles.title}>{details.title}</Text>
      <Text style={styles.subtitle}>Servings: {details.servings}</Text>
      <Text style={styles.subtitle}>Ready in: {details.readyInMinutes} minutes</Text>
      <Text style={styles.subtitle}>Cooking Time: {details.cookingMinutes} minutes</Text>
      <Text style={styles.subtitle}>Preparation Time: {details.preparationMinutes} minutes</Text>
      <Text style={styles.subtitle}>Health Score: {details.healthScore}</Text>
      <Text style={styles.subtitle}>Summary:</Text>
      <Text style={styles.summary}>{details.summary}</Text>

      <Text style={styles.subtitle}>Ingredients:</Text>
      {details.extendedIngredients.map((ingredient) => (
        <View key={ingredient.id} style={styles.ingredientContainer}>
          <Text style={styles.ingredientName}>{ingredient.name}</Text>
          <Text style={styles.ingredientAmount}>{ingredient.amount} {ingredient.measures.us.unitShort}</Text>
        </View>
      ))}

      {details.winePairing && (
        <>
          <Text style={styles.subtitle}>Wine Pairing:</Text>
          <Text style={styles.pairingText}>{details.winePairing.pairingText}</Text>
          {details.winePairing.productMatches.map((wine) => (
            <View key={wine.id} style={styles.wineContainer}>
              <Image style={styles.wineImage} source={{ uri: wine.imageUrl }} />
              <Text style={styles.wineTitle}>{wine.title}</Text>
              <Text style={styles.winePrice}>Price: {wine.price}</Text>
              <Text style={styles.wineDescription}>{wine.description}</Text>

            </View>
          ))}
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    color: '#264E36',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#264E36',
    marginVertical: 4,
  },
  summary: {
    fontSize: 16,
    color: '#767676',
    marginVertical: 8,
  },
  ingredientContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  ingredientImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 8,
  },
  ingredientName: {
    fontSize: 16,
    color: '#264E36',
  },
  ingredientAmount: {
    fontSize: 14,
    color: '#767676',
  },
  wineContainer: {
    marginVertical: 16,
  },
  wineImage: {
    width: 100,
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  wineTitle: {
    fontSize: 16,
    color: '#264E36',
    marginBottom: 4,
  },
  winePrice: {
    fontSize: 14,
    color: '#767676',
    marginBottom: 4,
  },
  wineDescription: {
    fontSize: 14,
    color: '#767676',
    marginBottom: 8,
  },
  link: {
    fontSize: 14,
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DetailsScreen;
