import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function StudentDashboard({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Student Dashboard</Text>
      <Button title="Study Guide" onPress={() => navigation.navigate('StudyGuide')} />
      <Button title="Study Techniques" onPress={() => navigation.navigate('StudyTechniques')} />
      <Button title="Tutorials" onPress={() => navigation.navigate('Tutorials')} />
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
