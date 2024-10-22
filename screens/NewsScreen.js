import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function News({navigation}) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Farming News</Text>
      <Text style={styles.content}>News 1: New agricultural policies introduced to support small-scale farmers.</Text>
      <Text style={styles.content}>News 2: Global maize prices expected to rise due to drought in major producing regions.</Text>
      <Text style={styles.content}>News 3: Innovative farming techniques boost yield in arid regions.</Text>
      <Text style={styles.content}>News 4: Organic farming sees a 15% increase in demand worldwide.</Text>
      <Text style={styles.content}>News 5: Farmers encouraged to adopt solar-powered irrigation systems.</Text>
      <Text style={styles.content}>News 6: Government announces subsidy program for seed purchases.</Text>
      <Text style={styles.content}>News 7: Climate change is impacting crop yields, say experts.</Text>
      <Text style={styles.content}>News 8: Local farmers market reports an increase in organic produce sales.</Text>
      <Text style={styles.content}>News 9: New pest-resistant crop varieties introduced to combat locust invasions.</Text>
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
