import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function WeatherForecasts({navigation}) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Weather Forecasts</Text>
      <Text style={styles.content}>Today: Sunny, 28°C / 18°C</Text>
      <Text style={styles.content}>Tomorrow: Cloudy, 25°C / 16°C</Text>
      <Text style={styles.content}>Day After Tomorrow: Rainy, 22°C / 15°C</Text>
      <Text style={styles.content}>Friday: Partly Cloudy, 26°C / 17°C</Text>
      <Text style={styles.content}>Saturday: Thunderstorms, 23°C / 14°C</Text>
      <Text style={styles.content}>Sunday: Windy, 27°C / 19°C</Text>
      <Text style={styles.content}>Monday: Sunny, 30°C / 20°C</Text>
      <Text style={styles.content}>Tuesday: Showers, 24°C / 16°C</Text>
      <Text style={styles.content}>Wednesday: Thunderstorms, 22°C / 15°C</Text>
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
