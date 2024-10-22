import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';

export default function Chemistry({ navigation }) {
  const [answers, setAnswers] = useState({});

  const handleSelectAnswer = (question, answer) => {
    setAnswers({ ...answers, [question]: answer });
  };

  const handleSubmit = () => {
    const correctAnswers = {
      1: 'A',
      2: 'D',
      3: 'B',
      4: 'C',
      5: 'A'
    };

    let score = 0;
    Object.keys(correctAnswers).forEach((question) => {
      if (answers[question] === correctAnswers[question]) {
        score += 1;
      }
    });

    Alert.alert(`You scored ${score} out of 5!`);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Chemistry Quiz</Text>

      <Text style={styles.question}>1. What is the chemical formula for water?</Text>
      <TouchableOpacity onPress={() => handleSelectAnswer(1, 'A')}><Text style={styles.option}>A. H₂O</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(1, 'B')}><Text style={styles.option}>B. CO₂</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(1, 'C')}><Text style={styles.option}>C. O₂</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(1, 'D')}><Text style={styles.option}>D. NaCl</Text></TouchableOpacity>

      <Text style={styles.question}>2. Which gas is most abundant in Earth's atmosphere?</Text>
      <TouchableOpacity onPress={() => handleSelectAnswer(2, 'A')}><Text style={styles.option}>A. Oxygen</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(2, 'B')}><Text style={styles.option}>B. Carbon Dioxide</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(2, 'C')}><Text style={styles.option}>C. Hydrogen</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(2, 'D')}><Text style={styles.option}>D. Nitrogen</Text></TouchableOpacity>

      <Text style={styles.question}>3. What is the atomic number of Carbon?</Text>
      <TouchableOpacity onPress={() => handleSelectAnswer(3, 'A')}><Text style={styles.option}>A. 8</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(3, 'B')}><Text style={styles.option}>B. 6</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(3, 'C')}><Text style={styles.option}>C. 12</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(3, 'D')}><Text style={styles.option}>D. 14</Text></TouchableOpacity>

      <Text style={styles.question}>4. What is the pH level of pure water?</Text>
      <TouchableOpacity onPress={() => handleSelectAnswer(4, 'A')}><Text style={styles.option}>A. 1</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(4, 'B')}><Text style={styles.option}>B. 3</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(4, 'C')}><Text style={styles.option}>C. 7</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(4, 'D')}><Text style={styles.option}>D. 14</Text></TouchableOpacity>

      <Text style={styles.question}>5. What is the main component of natural gas?</Text>
      <TouchableOpacity onPress={() => handleSelectAnswer(5, 'A')}><Text style={styles.option}>A. Methane</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(5, 'B')}><Text style={styles.option}>B. Ethane</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(5, 'C')}><Text style={styles.option}>C. Propane</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(5, 'D')}><Text style={styles.option}>D. Butane</Text></TouchableOpacity>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    marginVertical: 10,
  },
  option: {
    fontSize: 16,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  submitButton: {
    marginTop: 30,
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  submitText: {
    fontSize: 18,
    color: '#fff',
  },
});
