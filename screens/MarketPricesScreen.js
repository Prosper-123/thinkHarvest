import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function MarketPrices({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Market Prices</Text>
      
      {/* Grain and Cereals */}
      <Text style={styles.category}>Grain and Cereals</Text>
      <Text style={styles.content}>Maize: K150 per ton</Text>
      <Text style={styles.content}>Wheat: K200 per ton</Text>
      <Text style={styles.content}>Rice: K180 per ton</Text>
      <Text style={styles.content}>Soybeans: K250 per ton</Text>
      <Text style={styles.content}>Sunflower: K220 per ton</Text>

      {/* Cash Crops */}
      <Text style={styles.category}>Cash Crops</Text>
      <Text style={styles.content}>Cotton: K300 per ton</Text>
      <Text style={styles.content}>Tobacco: K400 per ton</Text>
      <Text style={styles.content}>Coffee: K500 per ton</Text>

      {/* Vegetables */}
      <Text style={styles.category}>Vegetables</Text>
      <Text style={styles.content}>Tomatoes: K100 per crate</Text>
      <Text style={styles.content}>Onions: K90 per crate</Text>
      <Text style={styles.content}>Potatoes: K80 per crate</Text>
      <Text style={styles.content}>Carrots: K70 per crate</Text>
      <Text style={styles.content}>Peppers: K110 per crate</Text>
      <Text style={styles.content}>Cabbage: K60 per head</Text>
      <Text style={styles.content}>Eggplants: K95 per crate</Text>

      {/* Fruits */}
      <Text style={styles.category}>Fruits</Text>
      <Text style={styles.content}>Bananas: K120 per bunch</Text>
      <Text style={styles.content}>Mangoes: K50 per crate</Text>
      <Text style={styles.content}>Oranges: K130 per crate</Text>
      <Text style={styles.content}>Pineapples: K80 each</Text>
      <Text style={styles.content}>Watermelons: K150 each</Text>

      {/* Livestock and Animal Products */}
      <Text style={styles.category}>Livestock and Animal Products</Text>
      <Text style={styles.content}>Beef: K90 per kg</Text>
      <Text style={styles.content}>Pork: K75 per kg</Text>
      <Text style={styles.content}>Chicken: K65 per bird</Text>
      <Text style={styles.content}>Eggs: K50 per tray</Text>
      <Text style={styles.content}>Milk: K20 per liter</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f8fa', // Light background for readability
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  category: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007bff',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'left',
  },
  content: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
    paddingLeft: 10,
  },
});
