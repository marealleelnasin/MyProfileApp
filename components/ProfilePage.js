import React, { useState, useEffect } from 'react';
import { View, Text, Image, Switch, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ProfilePageStyles from '../ProfilePageStyles';;

//EFFECT
const ProfilePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <View style={ProfilePageStyles.loadingContainer}>
        <ActivityIndicator size="large" color="#ffafb8" />
      </View>
    );
  }

//DARK MODE
  return (
    <View style={[ProfilePageStyles.container, isDarkMode ? ProfilePageStyles.containerDark : null]}>
      <View style={ProfilePageStyles.toggleButtonContainer}>
        <Text style={ProfilePageStyles.toggleText}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={(value) => setIsDarkMode(value)}
          thumbColor={isDarkMode ? '#ffafb8' : '#333'}
          trackColor={{ false: '#ccc', true: '#888' }}
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
          source={require('../assets/Marealle.jpg')}
          style={ProfilePageStyles.profileImage}
        />
      </View>
      
      <Text style={[ProfilePageStyles.nameText, isDarkMode ? ProfilePageStyles.nameTextDark : null]}>
        Marealle G. Elnasin 
      </Text>

      <View style={ProfilePageStyles.socialIconsContainer}> 
  <TouchableOpacity style={ProfilePageStyles.socialButton} onPress={() => { /* No link muna hehe */ }}>
    <Ionicons name="logo-facebook" size={24} color={isDarkMode ? '#fff' : '#3b5998'} />
    <Text style={ProfilePageStyles.socialText}>Add me on Facebook.</Text>
  </TouchableOpacity>
  <TouchableOpacity style={ProfilePageStyles.socialButton} onPress={() => { /* No link muna hehe */ }}>
    <Ionicons name="logo-instagram" size={24} color={isDarkMode ? '#fff' : '#E1306C'} />
    <Text style={ProfilePageStyles.socialText}>Follow me on Instagram.</Text>
  </TouchableOpacity>
  <TouchableOpacity style={ProfilePageStyles.socialButton} onPress={() => { /* No link muna hehe */ }}>
    <Ionicons name="logo-github" size={24} color={isDarkMode ? '#fff' : '#333'} />
    <Text style={ProfilePageStyles.socialText}>View my GitHub.</Text>
  </TouchableOpacity>
  <TouchableOpacity style={ProfilePageStyles.socialButton} onPress={() => { /* No link muna hehe */ }}>
    <Ionicons name="mail" size={24} color={isDarkMode ? '#fff' : '#1DA1F2'} />
    <Text style={ProfilePageStyles.socialText}>Email me.</Text>
  </TouchableOpacity>
</View>
</View>
  );
};

export default ProfilePage;