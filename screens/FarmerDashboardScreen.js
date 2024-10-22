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
  },
});
