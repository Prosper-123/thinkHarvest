import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function News({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Farming News</Text>
      <Text style={styles.content}>News 1: New agricultural policies introduced to support small-scale farmers, offering better access to subsidies and resources.</Text>
      <Text style={styles.content}>News 2: Global maize prices expected to rise due to prolonged drought in major producing regions like the US, Mexico, and South America.</Text>
      <Text style={styles.content}>News 3: Innovative farming techniques boost yield in arid regions, including the use of hydroponics and vertical farming methods.</Text>
      <Text style={styles.content}>News 4: Organic farming sees a 15% increase in demand worldwide, with a growing trend in sustainable and eco-friendly farming practices.</Text>
      <Text style={styles.content}>News 5: Farmers encouraged to adopt solar-powered irrigation systems to reduce water consumption and cut energy costs.</Text>
      <Text style={styles.content}>News 6: Government announces a new subsidy program for seed purchases, aimed at helping farmers during the planting season.</Text>
      <Text style={styles.content}>News 7: Climate change continues to impact crop yields, with experts warning of potential losses in staple crops like wheat and rice.</Text>
      <Text style={styles.content}>News 8: Local farmers market reports a 20% increase in organic produce sales, driven by consumer interest in healthier food options.</Text>
      <Text style={styles.content}>News 9: New pest-resistant crop varieties introduced to combat locust invasions, helping protect crops in regions prone to pest damage.</Text>
      <Text style={styles.content}>News 10: Major food corporations pledge to support regenerative agriculture practices, promising better soil health and sustainability in farming.</Text>
      <Text style={styles.content}>News 11: Scientists develop drought-resistant wheat varieties that can thrive in extreme weather conditions, offering hope to farmers in dry regions.</Text>
      <Text style={styles.content}>News 12: A new initiative promotes smallholder farmers in Africa, providing training, financial support, and access to new markets for their products.</Text>
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
    fontSize: 28,  
    fontWeight: 'bold',
    color: '#2c3e50',  
    marginBottom: 20,
    textAlign: 'center',
    textTransform: 'uppercase',  
  },
  content: {
    fontSize: 16,
    color: '#34495e',  
    marginBottom: 12,  
    paddingLeft: 15,  
    paddingRight: 15,  
    lineHeight: 24,  
  },
});
