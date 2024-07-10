import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { getFoodDetails } from '../services/api';
import { useRouter, useLocalSearchParams } from 'expo-router';

const DetailsScreen = () => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useLocalSearchParams();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await getFoodDetails(id);
        console.log(data)
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
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: details.image }} />
      <Text style={styles.title}>{details.title}</Text>
      <Text style={styles.description}>Delicious {details.title} recipe</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F4EF',
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
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#767676',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DetailsScreen;
