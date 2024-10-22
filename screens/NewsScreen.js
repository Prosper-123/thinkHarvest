import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function News() {
  return (
    <View style={styles.container}>
      <Text>Latest Agricultural News</Text>
      {/* Fetch and display news related to farming */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
