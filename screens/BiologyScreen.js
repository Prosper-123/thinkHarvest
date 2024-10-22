import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';

export default function Biology({ navigation }) {
  const [answers, setAnswers] = useState({});

  const handleSelectAnswer = (question, answer) => {
    setAnswers({ ...answers, [question]: answer });
  };

  const handleSubmit = () => {
    const correctAnswers = {
      1: 'A',
      2: 'B',
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
      <Text style={styles.title}>Biology Quiz</Text>

      <Text style={styles.question}>1. What is the basic unit of life?</Text>
      <TouchableOpacity onPress={() => handleSelectAnswer(1, 'A')}><Text style={styles.option}>A. Cell</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(1, 'B')}><Text style={styles.option}>B. Tissue</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(1, 'C')}><Text style={styles.option}>C. Organ</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(1, 'D')}><Text style={styles.option}>D. Organism</Text></TouchableOpacity>

      <Text style={styles.question}>2. What process do plants use to make their own food?</Text>
      <TouchableOpacity onPress={() => handleSelectAnswer(2, 'A')}><Text style={styles.option}>A. Respiration</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(2, 'B')}><Text style={styles.option}>B. Photosynthesis</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(2, 'C')}><Text style={styles.option}>C. Digestion</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(2, 'D')}><Text style={styles.option}>D. Transpiration</Text></TouchableOpacity>

      <Text style={styles.question}>3. What is the genetic material in living organisms?</Text>
      <TouchableOpacity onPress={() => handleSelectAnswer(3, 'A')}><Text style={styles.option}>A. RNA</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(3, 'B')}><Text style={styles.option}>B. DNA</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(3, 'C')}><Text style={styles.option}>C. Proteins</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(3, 'D')}><Text style={styles.option}>D. Carbohydrates</Text></TouchableOpacity>

      <Text style={styles.question}>4. Which organelle is known as the powerhouse of the cell?</Text>
      <TouchableOpacity onPress={() => handleSelectAnswer(4, 'A')}><Text style={styles.option}>A. Nucleus</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(4, 'B')}><Text style={styles.option}>B. Ribosome</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(4, 'C')}><Text style={styles.option}>C. Mitochondria</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(4, 'D')}><Text style={styles.option}>D. Endoplasmic Reticulum</Text></TouchableOpacity>

      <Text style={styles.question}>5. What is the process by which cells divide called?</Text>
      <TouchableOpacity onPress={() => handleSelectAnswer(5, 'A')}><Text style={styles.option}>A. Mitosis</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(5, 'B')}><Text style={styles.option}>B. Meiosis</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(5, 'C')}><Text style={styles.option}>C. Cytokinesis</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelectAnswer(5, 'D')}><Text style={styles.option}>D. Fusion</Text></TouchableOpacity>

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
