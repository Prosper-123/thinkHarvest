import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function RoleSelectionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Select Your Role:</Text>
      <Button title="Farmer" onPress={() => navigation.navigate('FarmerDashboard')} />
      <Button title="Student" onPress={() => navigation.navigate('StudentDashboard')} />
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
