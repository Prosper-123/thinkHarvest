import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';

export default function English({navigation}) {
  const [answers, setAnswers] = useState({});

  const handleSelectAnswer = (question, answer) => {
    setAnswers({ ...answers, [question]: answer });
  };

  const handleSubmit = () => {
    const correctAnswers = {
      1: 'C',
      2: 'B',
      3: 'A',
      4: 'D',
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
      <Text style={styles.title}>English Quiz</Text>

      <Text style={styles.question}>1. What is the synonym of 'happy'?</Text>
      <TouchableOpacity onPress={() => handleSelectAnswer(1, 'A')}><Text style={styles.option}>A. Sad</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(1, 'B')}><Text style={styles.option}>B. Angry</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(1, 'C')}><Text style={styles.option}>C. Joyful</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(1, 'D')}><Text style={styles.option}>D. Tired</Text></TouchableOpacity>

      <Text style={styles.question}>2. Which of the following is a noun?</Text>
      <TouchableOpacity onPress={() => handleSelectAnswer(2, 'A')}><Text style={styles.option}>A. Quickly</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(2, 'B')}><Text style={styles.option}>B. Happiness</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(2, 'C')}><Text style={styles.option}>C. Beautiful</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(2, 'D')}><Text style={styles.option}>D. Run</Text></TouchableOpacity>

      <Text style={styles.question}>3. What is the antonym of 'difficult'?</Text>
      <TouchableOpacity onPress={() => handleSelectAnswer(3, 'A')}><Text style={styles.option}>A. Easy</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(3, 'B')}><Text style={styles.option}>B. Hard</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(3, 'C')}><Text style={styles.option}>C. Complicated</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(3, 'D')}><Text style={styles.option}>D. Tough</Text></TouchableOpacity>

      <Text style={styles.question}>4. Which sentence is correct?</Text>
      <TouchableOpacity onPress={() => handleSelectAnswer(4, 'A')}><Text style={styles.option}>A. She go to school every day.</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(4, 'B')}><Text style={styles.option}>B. She goes to school every day.</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(4, 'C')}><Text style={styles.option}>C. She gone to school every day.</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(4, 'D')}><Text style={styles.option}>D. She going to school every day.</Text></TouchableOpacity>

      <Text style={styles.question}>5. What is the main idea of a text?</Text>
      <TouchableOpacity onPress={() => handleSelectAnswer(5, 'A')}><Text style={styles.option}>A. The most important point the author wants to make.</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(5, 'B')}><Text style={styles.option}>B. The details of a story.</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(5, 'C')}><Text style={styles.option}>C. The author's opinion.</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(5, 'D')}><Text style={styles.option}>D. The conclusion of a text.</Text></TouchableOpacity>

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
