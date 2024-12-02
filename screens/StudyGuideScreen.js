import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function StudyGuide({navigation}) {

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Study Guide</Text>

      <TouchableOpacity style={styles.subject} onPress={() => navigation.navigate('Mathematics')}>
        <Text style={styles.subjectText}>Mathematics</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.subject} onPress={() => navigation.navigate('Physics')}>
        <Text style={styles.subjectText}>Physics</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.subject} onPress={() => navigation.navigate('Chemistry')}>
        <Text style={styles.subjectText}>Chemistry</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.subject} onPress={() => navigation.navigate('Biology')}>
        <Text style={styles.subjectText}>Biology</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.subject} onPress={() => navigation.navigate('English')}>
        <Text style={styles.subjectText}>English</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',  
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 30,  
  },
  subject: {
    paddingVertical: 18,
    paddingHorizontal: 25,
    backgroundColor: '#007bff',  
    borderRadius: 12,
    marginBottom: 20,
    elevation: 4,  
    alignItems: 'center',
  },
  subjectText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fff',  
  },
});
