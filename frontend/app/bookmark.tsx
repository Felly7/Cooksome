// screens/BookmarkScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BookmarkScreen = () => {
  const { id } = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bookmarked Recipes</Text>
      {/* Add FlatList or other components to display bookmarked recipes */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default BookmarkScreen;
