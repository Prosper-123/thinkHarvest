import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function MarketPrices({navigation}) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Market Prices</Text>
      <Text style={styles.content}>Maize: k150 per ton</Text>
      <Text style={styles.content}>Wheat: k200 per ton</Text>
      <Text style={styles.content}>Rice: k180 per ton</Text>
      <Text style={styles.content}>Soybeans: k250 per ton</Text>
      <Text style={styles.content}>Sunflower: k220 per ton</Text>
      <Text style={styles.content}>Cotton: k300 per ton</Text>
      <Text style={styles.content}>Tomatoes: k100 per crate</Text>
      <Text style={styles.content}>Onions: k90 per crate</Text>
      <Text style={styles.content}>Potatoes: k80 per crate</Text>
      <Text style={styles.content}>Carrots: k70 per crate</Text>
      <Text style={styles.content}>Peppers: k110 per crate</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    marginBottom: 10,
  },
});
