import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeNameScreen = () => {
  const navigation = useNavigation();
  const [homeName, setHomeName] = useState('My Home');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Add <Text style={styles.highlight}>Home</Text> Name
      </Text>
      <Text style={styles.subtitle}>
        Every smart home needs a name. What would you like to call yours?
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={homeName}
          onChangeText={setHomeName}
          placeholder="Enter Home Name"
          placeholderTextColor="gray"
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate('welldone', { homeName: 'My Home' })}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('welldone', { homeName })}>
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  highlight: {
    color: '#2563eb',
  },
  subtitle: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 15,
    marginBottom: 30,
  },
  input: {
    fontSize: 18,
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  skipButton: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    marginRight: 10,
  },
  continueButton: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#2563eb',
  },
  skipText: {
    fontSize: 16,
    color: 'gray',
  },
  continueText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HomeNameScreen;
