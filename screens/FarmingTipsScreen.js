import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FarmingTips() {
  return (
    <View style={styles.container}>
      <Text>Farming Tips</Text>
      {/* Provide tips fetched from a database or external source */}
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
