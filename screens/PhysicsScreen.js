import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';

export default function Physics({ navigation }) {
  const [answers, setAnswers] = useState({});

  const handleSelectAnswer = (question, answer) => {
    setAnswers({ ...answers, [question]: answer });
  };

  const handleSubmit = () => {
    const correctAnswers = {
      1: 'B',
      2: 'A',
      3: 'C',
      4: 'D',
      5: 'B'
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
      <Text style={styles.title}>Physics Quiz</Text>

      <Text style={styles.question}>1. What is the unit of force?</Text>
      <TouchableOpacity onPress={() => handleSelectAnswer(1, 'A')}><Text style={styles.option}>A. Joules</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(1, 'B')}><Text style={styles.option}>B. Newton</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(1, 'C')}><Text style={styles.option}>C. Pascal</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(1, 'D')}><Text style={styles.option}>D. Watt</Text></TouchableOpacity>

      <Text style={styles.question}>2. What is the speed of light in a vacuum?</Text>
      <TouchableOpacity onPress={() => handleSelectAnswer(2, 'A')}><Text style={styles.option}>A. 3.0 × 10⁸ m/s</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(2, 'B')}><Text style={styles.option}>B. 1.5 × 10⁸ m/s</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(2, 'C')}><Text style={styles.option}>C. 9.8 m/s²</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(2, 'D')}><Text style={styles.option}>D. 300 km/h</Text></TouchableOpacity>

      <Text style={styles.question}>3. What law states that "For every action, there is an equal and opposite reaction"?</Text>
      <TouchableOpacity onPress={() => handleSelectAnswer(3, 'A')}><Text style={styles.option}>A. Newton's First Law</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(3, 'B')}><Text style={styles.option}>B. Newton's Second Law</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(3, 'C')}><Text style={styles.option}>C. Newton's Third Law</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(3, 'D')}><Text style={styles.option}>D. Law of Gravity</Text></TouchableOpacity>

      <Text style={styles.question}>4. Which of the following is a scalar quantity?</Text>
      <TouchableOpacity onPress={() => handleSelectAnswer(4, 'A')}><Text style={styles.option}>A. Velocity</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(4, 'B')}><Text style={styles.option}>B. Acceleration</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(4, 'C')}><Text style={styles.option}>C. Force</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(4, 'D')}><Text style={styles.option}>D. Temperature</Text></TouchableOpacity>

      <Text style={styles.question}>5. Which law explains why objects float or sink?</Text>
      <TouchableOpacity onPress={() => handleSelectAnswer(5, 'A')}><Text style={styles.option}>A. Boyle's Law</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(5, 'B')}><Text style={styles.option}>B. Archimedes' Principle</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(5, 'C')}><Text style={styles.option}>C. Hooke's Law</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(5, 'D')}><Text style={styles.option}>D. Bernoulli's Principle</Text></TouchableOpacity>

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
