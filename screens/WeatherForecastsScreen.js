import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WeatherForecasts() {
  return (
    <View style={styles.container}>
      <Text>Weather Forecasts for Farmers</Text>
      {/* Weather data can be fetched from an API and displayed here */}
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
