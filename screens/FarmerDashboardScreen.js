import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function FarmerDashboard({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Farmer Dashboard</Text>
      <Text style={styles.subtitle}>Manage your resources and stay updated</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('WeatherForecasts')}
      >
        <Text style={styles.buttonText}>Weather Forecasts</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('MarketPrices')}
      >
        <Text style={styles.buttonText}>Market Prices</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('FarmingTips')}
      >
        <Text style={styles.buttonText}>Farming Tips</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('News')}
      >
        <Text style={styles.buttonText}>News</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f8ff', 
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 10,
    elevation: 3,
    marginBottom: 15,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
