import React, { useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, TextInput, FlatList, ActivityIndicator, Image, Text, TouchableOpacity, StatusBar } from 'react-native';
import axios from 'axios';
import { getSearchResults } from '../services/api';
import { router } from 'expo-router';
import BottomNav from '@/components/BottomNav';

const Search = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (search.length > 2) {
        fetchSearchResults(search);
      } else {
        setResults([]);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [search]);

  const fetchSearchResults = async (search) => {
    setLoading(true);
    try {
      const response = await getSearchResults(search)
      setResults(response.results);
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePress =  (id) => {
    router.push(`/details?id=${id}`);
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.resultItem} onPress={() => handlePress(item.id)}>
      <Image style={styles.resultImage} source={{ uri: item.image }} />
      <Text style={styles.resultText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search any recipes"
        value={search}
        onChangeText={(text) => setSearch(text)}
      />
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

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F4EF',
    padding: 16,
    marginTop: StatusBar.currentHeight,
  },
  searchInput: {
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
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
