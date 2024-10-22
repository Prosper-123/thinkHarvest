import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

export default function Tutorials({navigation}) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <Text style={styles.title}>Tutorials</Text>

      <TouchableOpacity style={styles.tutorial} onPress={() => Linking.openURL('https://www.khanacademy.org')}>
        <Text style={styles.tutorialTitle}>1. Khan Academy</Text>
        <Text style={styles.tutorialDescription}>
          Khan Academy provides free tutorials on a wide range of subjects including mathematics, science, economics, and more. It’s a great resource for 
          step-by-step video lessons.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tutorial} onPress={() => Linking.openURL('https://www.coursera.org')}>
        <Text style={styles.tutorialTitle}>2. Coursera</Text>
        <Text style={styles.tutorialDescription}>
          Coursera offers access to university-level courses and tutorials on various topics such as computer science, data science, and business. 
          Many of the courses are taught by professors from top universities.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tutorial} onPress={() => Linking.openURL('https://www.udemy.com')}>
        <Text style={styles.tutorialTitle}>3. Udemy</Text>
        <Text style={styles.tutorialDescription}>
          Udemy offers affordable courses on various topics, from programming to design. Many of these tutorials are hands-on, with real-world projects.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tutorial} onPress={() => Linking.openURL('https://www.edx.org')}>
        <Text style={styles.tutorialTitle}>4. edX</Text>
        <Text style={styles.tutorialDescription}>
          edX provides free access to university courses from institutions like MIT, Harvard, and Berkeley. It offers tutorials on topics like data science, engineering, and more.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tutorial} onPress={() => Linking.openURL('https://www.codecademy.com')}>
        <Text style={styles.tutorialTitle}>5. Codecademy</Text>
        <Text style={styles.tutorialDescription}>
          Codecademy is a fantastic platform to learn coding and programming languages such as Python, JavaScript, and HTML through interactive tutorials.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tutorial} onPress={() => Linking.openURL('https://www.linkedin.com/learning/')}>
        <Text style={styles.tutorialTitle}>6. LinkedIn Learning</Text>
        <Text style={styles.tutorialDescription}>
          LinkedIn Learning provides a wide range of tutorials and courses for professional development, covering topics such as leadership, coding, and design.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tutorial} onPress={() => Linking.openURL('https://www.youtube.com/')}>
        <Text style={styles.tutorialTitle}>7. YouTube Learning</Text>
        <Text style={styles.tutorialDescription}>
          YouTube has countless tutorials on a variety of subjects, ranging from academic courses to practical skills like video editing, cooking, and DIY projects.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tutorial} onPress={() => Linking.openURL('https://www.skillshare.com')}>
        <Text style={styles.tutorialTitle}>8. Skillshare</Text>
        <Text style={styles.tutorialDescription}>
          Skillshare focuses on creative skills like design, photography, and writing. It offers tutorials from professionals in various fields.
        </Text>
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
  scrollContent: {
    paddingBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  tutorial: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  tutorialTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  tutorialDescription: {
    fontSize: 16,
  },
});
