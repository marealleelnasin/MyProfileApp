import React, { useState, useEffect } from 'react';
import { View, Text, Image, Switch, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ProfilePageStyles from '../ProfilePageStyles'; // Ensure the correct path

const ProfilePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after 2 seconds
    }, 2000); // Increase this value if needed
    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  // Loading indicator logic
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#efe9e2' }}>
        <ActivityIndicator size="large" color="#ffafb8" />
      </View>
    );
  }

  // Main content after loading
  return (
    <View style={[ProfilePageStyles.container, isDarkMode ? ProfilePageStyles.containerDark : null]}>
      <View style={ProfilePageStyles.toggleButtonContainer}>
        <Text style={{ color: isDarkMode ? '#fff' : '#333' }}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={(value) => setIsDarkMode(value)}
          thumbColor={isDarkMode ? '#ffafb8' : '#333'}
        />
        <Ionicons
          name={isDarkMode ? 'moon' : 'sunny'}
          size={24}
          color={isDarkMode ? '#ffafb8' : '#333'}
          style={ProfilePageStyles.icon}
        />
      </View>

      <View style={ProfilePageStyles.imageContainer}>
        <Image
          source={require('../assets/Marealle.jpg')} // Ensure this path is correct
          style={ProfilePageStyles.profileImage}
        />
      </View>

      <Text style={[ProfilePageStyles.nameText, isDarkMode ? ProfilePageStyles.nameTextDark : null]}>
        Marealle G. Elnasin
      </Text>

      <Text style={[ProfilePageStyles.emailText, isDarkMode ? ProfilePageStyles.emailTextDark : null]}>
        elnasin.marealle456@gmail.com
      </Text>
    </View>
  );
};

export default ProfilePage;
