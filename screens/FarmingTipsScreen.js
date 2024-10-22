import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function FarmingTips({navigation}) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Farming Tips</Text>
      <Text style={styles.content}>Tip 1: Rotate crops annually to avoid soil depletion.</Text>
      <Text style={styles.content}>Tip 2: Use organic fertilizers to improve soil quality.</Text>
      <Text style={styles.content}>Tip 3: Mulch your crops to retain moisture and suppress weeds.</Text>
      <Text style={styles.content}>Tip 4: Practice crop diversification to spread risk.</Text>
      <Text style={styles.content}>Tip 5: Irrigate crops during early morning or late evening to reduce water loss.</Text>
      <Text style={styles.content}>Tip 6: Keep a farm record book to monitor productivity and expenses.</Text>
      <Text style={styles.content}>Tip 7: Apply integrated pest management (IPM) to reduce chemical use.</Text>
      <Text style={styles.content}>Tip 8: Test soil before planting to ensure it's suitable for your crops.</Text>
      <Text style={styles.content}>Tip 9: Install drip irrigation to save water and increase efficiency.</Text>
      <Text style={styles.content}>Tip 10: Harvest crops at the right time for optimal quality and yield.</Text>
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
