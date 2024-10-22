import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';

export default function Mathematics({ navigation }) {
  const [answers, setAnswers] = useState({});

  const handleSelectAnswer = (question, answer) => {
    setAnswers({ ...answers, [question]: answer });
  };

  const handleSubmit = () => {
    const correctAnswers = {
      1: 'C',
      2: 'B',
      3: 'D',
      4: 'A',
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
      <Text style={styles.title}>Mathematics Quiz</Text>

      <Text style={styles.question}>1. What is the solution to 2x + 3 = 11?</Text>
      <TouchableOpacity onPress={() => handleSelectAnswer(1, 'A')}><Text style={styles.option}>A. x = 3</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(1, 'B')}><Text style={styles.option}>B. x = 4</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(1, 'C')}><Text style={styles.option}>C. x = 5</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(1, 'D')}><Text style={styles.option}>D. x = 2</Text></TouchableOpacity>

      <Text style={styles.question}>2. What is the area of a circle with radius 7 cm?</Text>
      <TouchableOpacity onPress={() => handleSelectAnswer(2, 'A')}><Text style={styles.option}>A. 154 cm²</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(2, 'B')}><Text style={styles.option}>B. 44 cm²</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(2, 'C')}><Text style={styles.option}>C. 140 cm²</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(2, 'D')}><Text style={styles.option}>D. 98 cm²</Text></TouchableOpacity>

      <Text style={styles.question}>3. Simplify: (x² - 9)/(x + 3).</Text>
      <TouchableOpacity onPress={() => handleSelectAnswer(3, 'A')}><Text style={styles.option}>A. x - 3</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(3, 'B')}><Text style={styles.option}>B. x² - 3</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(3, 'C')}><Text style={styles.option}>C. x² + 3</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(3, 'D')}><Text style={styles.option}>D. x - 3</Text></TouchableOpacity>

      <Text style={styles.question}>4. What is the value of sin(30°)?</Text>
      <TouchableOpacity onPress={() => handleSelectAnswer(4, 'A')}><Text style={styles.option}>A. 0.5</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(4, 'B')}><Text style={styles.option}>B. 1</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(4, 'C')}><Text style={styles.option}>C. 0.75</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(4, 'D')}><Text style={styles.option}>D. 0</Text></TouchableOpacity>

      <Text style={styles.question}>5. Solve: log₃(27).</Text>
      <TouchableOpacity onPress={() => handleSelectAnswer(5, 'A')}><Text style={styles.option}>A. 4</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(5, 'B')}><Text style={styles.option}>B. 3</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(5, 'C')}><Text style={styles.option}>C. 2</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(5, 'D')}><Text style={styles.option}>D. 1</Text></TouchableOpacity>

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
