import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProfilePage from './components/ProfilePage'; // Correct path to ProfilePage

export default function App() {
  return (
    <View style={styles.container}>
      <ProfilePage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
