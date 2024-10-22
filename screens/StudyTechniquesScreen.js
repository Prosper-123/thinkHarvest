import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

export default function StudyTechniques({navigation}) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <Text style={styles.title}>Study Techniques</Text>

      <Text style={styles.paragraph}>
        Studying is essential for academic success, but using the right techniques can help you retain information better and study more efficiently. 
        Below are 10 techniques that have proven to be effective for students.
      </Text>

      <Text style={styles.techniqueTitle}>1. Active Recall</Text>
      <Text style={styles.paragraph}>
        Active recall involves testing yourself on the material you’re learning rather than passively reading it. This method strengthens your memory retention.
      </Text>

      <Text style={styles.techniqueTitle}>2. Spaced Repetition</Text>
      <Text style={styles.paragraph}>
        Spaced repetition is a technique that involves reviewing material at increasing intervals. This helps transfer knowledge from short-term memory to long-term memory.
      </Text>

      <Text style={styles.techniqueTitle}>3. Pomodoro Technique</Text>
      <Text style={styles.paragraph}>
        The Pomodoro Technique involves studying in focused 25-minute intervals (called “Pomodoros”), followed by a short break. This method helps maintain focus and prevents burnout.
      </Text>

      <Text style={styles.techniqueTitle}>4. Feynman Technique</Text>
      <Text style={styles.paragraph}>
        The Feynman Technique involves teaching the concept you're learning to someone else in simple terms. Explaining complex topics in layman's language deepens your understanding.
      </Text>

      <Text style={styles.techniqueTitle}>5. Mind Mapping</Text>
      <Text style={styles.paragraph}>
        Mind mapping is a visual tool to organize and connect ideas. By linking related concepts, it helps you understand the relationships between topics.
      </Text>

      <Text style={styles.techniqueTitle}>6. SQ3R Method</Text>
      <Text style={styles.paragraph}>
        SQ3R stands for Survey, Question, Read, Recite, Review. It’s a reading comprehension method that helps in absorbing large amounts of information effectively.
      </Text>

      <Text style={styles.techniqueTitle}>7. Study Groups</Text>
      <Text style={styles.paragraph}>
        Collaborating with a group of peers allows for shared learning. Discussing material and explaining concepts to others reinforces your knowledge.
      </Text>

      <Text style={styles.techniqueTitle}>8. Interleaving</Text>
      <Text style={styles.paragraph}>
        Interleaving involves studying different subjects or topics in one study session. It improves your ability to distinguish between similar concepts and apply them in various situations.
      </Text>

      <Text style={styles.techniqueTitle}>9. Visual Aids</Text>
      <Text style={styles.paragraph}>
        Using visual aids such as diagrams, charts, and graphs can help you better understand and remember complex information.
      </Text>

      <Text style={styles.techniqueTitle}>10. Self-Quizzing</Text>
      <Text style={styles.paragraph}>
        Creating and taking practice quizzes on the material you’ve learned can help identify gaps in knowledge and solidify your learning.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 15,
    lineHeight: 24,
  },
  techniqueTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
