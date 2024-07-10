import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { router } from 'expo-router';

const Menu = () => {


  return (
    <View style={styles.container}>
        <Text>Menu</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Menu;
