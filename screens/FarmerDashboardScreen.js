import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function FarmerDashboard({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Farmer Dashboard</Text>
      <Button title="Weather Forecasts" onPress={() => navigation.navigate('WeatherForecasts')} />
      <Button title="Market Prices" onPress={() => navigation.navigate('MarketPrices')} />
      <Button title="Farming Tips" onPress={() => navigation.navigate('FarmingTips')} />
      <Button title="News" onPress={() => navigation.navigate('News')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    color: '#666',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    elevation: 3,
    marginBottom: 15,
    width: '100%',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});