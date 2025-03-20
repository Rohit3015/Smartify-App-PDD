import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const start = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Illustration */}
      <Image source={require('./assets/home.png')} style={styles.image} />
      
      {/* Text Content */}
      <Text style={styles.title}>Easy living with your smart home 🌟</Text>
      <Text style={styles.description}>
        Get your smart devices in one place and manage all of these with a few taps.
      </Text>

      {/* Pagination Dots */}
      <View style={styles.pagination}>
        <View style={[styles.dot, styles.activeDot]} />
      </View>

      {/* Get Started Button - Navigate to Login */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('login')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5F7FA', padding: 30 },
  image: { width: 500, height: 440, resizeMode: 'contain'},
  title: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 50 },
  description: { fontSize: 14, textAlign: 'center', color: '#6b7280', marginTop: 10 },
  pagination: { flexDirection: 'row', marginTop: 20 },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#d1d5db', marginHorizontal: 4 },
  activeDot: { backgroundColor: '#2563eb' },
  button: { backgroundColor: '#2563eb', paddingVertical: 12, paddingHorizontal: 30, borderRadius: 8, marginTop: 20 },
  buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
});

export default start;
