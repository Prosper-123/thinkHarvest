import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Tutorials() {
  return (
    <View style={styles.container}>
      <Text>Tutorials for Students</Text>
      {/* Provide links to video tutorials or learning content */}
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
