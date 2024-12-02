import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function WeatherForecasts({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Weather Forecasts for Zambia</Text>
      
      <Text style={styles.region}>Lusaka</Text>
      <Text style={styles.content}>Today: Sunny, 28°C / 18°C</Text>
      <Text style={styles.content}>Tomorrow: Cloudy, 25°C / 16°C</Text>
      <Text style={styles.content}>Friday: Partly Cloudy, 26°C / 17°C</Text>

      <Text style={styles.region}>Ndola</Text>
      <Text style={styles.content}>Today: Rainy, 24°C / 15°C</Text>
      <Text style={styles.content}>Tomorrow: Showers, 23°C / 14°C</Text>
      <Text style={styles.content}>Saturday: Thunderstorms, 22°C / 13°C</Text>

      <Text style={styles.region}>Livingstone</Text>
      <Text style={styles.content}>Today: Windy, 27°C / 19°C</Text>
      <Text style={styles.content}>Tomorrow: Sunny, 29°C / 20°C</Text>
      <Text style={styles.content}>Sunday: Partly Cloudy, 28°C / 18°C</Text>

      <Text style={styles.region}>Chipata</Text>
      <Text style={styles.content}>Today: Cloudy, 25°C / 17°C</Text>
      <Text style={styles.content}>Tomorrow: Rainy, 23°C / 16°C</Text>
      <Text style={styles.content}>Monday: Thunderstorms, 22°C / 15°C</Text>
      
      <Text style={styles.region}>Kitwe</Text>
      <Text style={styles.content}>Today: Partly Cloudy, 26°C / 18°C</Text>
      <Text style={styles.content}>Tomorrow: Sunny, 28°C / 19°C</Text>
      <Text style={styles.content}>Tuesday: Showers, 24°C / 16°C</Text>

      {/* Additional Places */}
      <Text style={styles.region}>Kabwe</Text>
      <Text style={styles.content}>Today: Cloudy, 27°C / 18°C</Text>
      <Text style={styles.content}>Tomorrow: Sunny, 28°C / 19°C</Text>
      <Text style={styles.content}>Wednesday: Thunderstorms, 26°C / 17°C</Text>

      <Text style={styles.region}>Solwezi</Text>
      <Text style={styles.content}>Today: Rainy, 23°C / 14°C</Text>
      <Text style={styles.content}>Tomorrow: Showers, 22°C / 13°C</Text>
      <Text style={styles.content}>Thursday: Windy, 24°C / 15°C</Text>

      <Text style={styles.region}>Choma</Text>
      <Text style={styles.content}>Today: Sunny, 28°C / 19°C</Text>
      <Text style={styles.content}>Tomorrow: Partly Cloudy, 29°C / 20°C</Text>
      <Text style={styles.content}>Friday: Rainy, 25°C / 16°C</Text>

      <Text style={styles.region}>Mansa</Text>
      <Text style={styles.content}>Today: Cloudy, 26°C / 17°C</Text>
      <Text style={styles.content}>Tomorrow: Showers, 24°C / 15°C</Text>
      <Text style={styles.content}>Saturday: Thunderstorms, 23°C / 14°C</Text>

      <Text style={styles.region}>Mongu</Text>
      <Text style={styles.content}>Today: Partly Cloudy, 27°C / 18°C</Text>
      <Text style={styles.content}>Tomorrow: Sunny, 29°C / 20°C</Text>
      <Text style={styles.content}>Sunday: Windy, 28°C / 19°C</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f8fa', // Light background for better readability
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  region: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007bff',
    marginTop: 15,
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
