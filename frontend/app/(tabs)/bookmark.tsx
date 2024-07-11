import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { router } from 'expo-router';

const Bookmark = () => {


  return (
    <View style={styles.container}>
        <Text>Bookmark</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Bookmark;
