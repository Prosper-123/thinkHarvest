import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MarketPrices() {
  return (
    <View style={styles.container}>
      <Text>Current Market Prices</Text>
      {/* Fetch market prices from an external API */}
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
