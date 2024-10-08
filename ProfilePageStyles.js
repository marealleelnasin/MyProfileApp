import { StyleSheet } from 'react-native';

const ProfilePageStyles = StyleSheet.create({
  loadingContainer: { // This must be outside the 'container' style
    flex: 1,
    justifyContent: 'center', // Centers the indicator vertically
    alignItems: 'center', // Centers the indicator horizontally
    backgroundColor: '#efe9e2', // Background color, change if necessary
  },
  container: {
    flex: 1,
    backgroundColor: '#efe9e2',
    alignItems: 'center',
    paddingTop: 50,
    position: 'relative', // Ensure relative positioning for toggle
  },
  containerDark: {
    backgroundColor: '#333', // Dark background color for dark mode
  },
  toggleButtonContainer: {
    position: 'absolute',
    top: 40,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    borderWidth: 4,
    borderColor: '#ffafb8',
    borderRadius: 100,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // For Android
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#887a7a', // Light mode text color
    marginBottom: 5,
  },
  nameTextDark: {
    color: '#fff', // Dark mode text color
  },
  emailText: {
    fontSize: 16,
    color: '#c0b8b8', // Light mode text color
    marginBottom: 30,
  },
  emailTextDark: {
    color: '#ccc', // Dark mode text color  
  },
});

export default ProfilePageStyles;
