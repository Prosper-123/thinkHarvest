import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function FarmingTips({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Farming Tips</Text>
      
      <Text style={styles.category}>Soil and Crop Management</Text>
      <Text style={styles.content}>Tip 1: Rotate crops annually to avoid soil depletion.</Text>
      <Text style={styles.content}>Tip 2: Use organic fertilizers to improve soil quality.</Text>
      <Text style={styles.content}>Tip 3: Mulch your crops to retain moisture and suppress weeds.</Text>
      <Text style={styles.content}>Tip 4: Test soil before planting to ensure it's suitable for your crops.</Text>
      <Text style={styles.content}>Tip 5: Add cover crops to improve soil health during off-seasons.</Text>

      <Text style={styles.category}>Water Management</Text>
      <Text style={styles.content}>Tip 6: Irrigate crops during early morning or late evening to reduce water loss.</Text>
      <Text style={styles.content}>Tip 7: Install drip irrigation to save water and increase efficiency.</Text>
      <Text style={styles.content}>Tip 8: Collect and store rainwater for dry periods.</Text>
      <Text style={styles.content}>Tip 9: Avoid overwatering to prevent root diseases.</Text>

      <Text style={styles.category}>Pest and Disease Control</Text>
      <Text style={styles.content}>Tip 10: Apply integrated pest management (IPM) to reduce chemical use.</Text>
      <Text style={styles.content}>Tip 11: Introduce beneficial insects like ladybugs for natural pest control.</Text>
      <Text style={styles.content}>Tip 12: Remove infected plants immediately to prevent disease spread.</Text>
      <Text style={styles.content}>Tip 13: Use disease-resistant crop varieties.</Text>

      <Text style={styles.category}>Farm Management</Text>
      <Text style={styles.content}>Tip 14: Keep a farm record book to monitor productivity and expenses.</Text>
      <Text style={styles.content}>Tip 15: Practice crop diversification to spread risk.</Text>
      <Text style={styles.content}>Tip 16: Utilize modern farming technology for precision agriculture.</Text>
      <Text style={styles.content}>Tip 17: Attend agricultural training programs to learn new techniques.</Text>
      
      <Text style={styles.category}>Harvest and Post-Harvest</Text>
      <Text style={styles.content}>Tip 18: Harvest crops at the right time for optimal quality and yield.</Text>
      <Text style={styles.content}>Tip 19: Store harvested produce in cool and dry places to extend shelf life.</Text>
      <Text style={styles.content}>Tip 20: Use proper packaging to avoid damage during transport.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f8fa',
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
  },
  content: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
    paddingLeft: 10,
  },
});
