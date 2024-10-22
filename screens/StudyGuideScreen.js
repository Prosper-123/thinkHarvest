import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StudyGuide() {
  return (
    <View style={styles.container}>
      <Text>Study Guide for Students</Text>
      {/* Provide study materials or guides */}
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
