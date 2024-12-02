import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function StudentDashboard({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Dashboard</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Study Guide"
          onPress={() => navigation.navigate('StudyGuide')}
          color="#007bff"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Study Techniques"
          onPress={() => navigation.navigate('StudyTechniques')}
          color="#007bff"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Tutorials"
          onPress={() => navigation.navigate('Tutorials')}
          color="#007bff"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f8fa',  
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,  
    textAlign: 'center',
  },
  buttonContainer: {
    marginBottom: 20,  
    width: '80%',  
  },
});
