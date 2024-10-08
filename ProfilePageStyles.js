import { StyleSheet } from 'react-native';

const ProfilePageStyles = StyleSheet.create({
  loadingContainer: { 
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#efe9e2', 
  },
  container: {
    flex: 1,
    backgroundColor: '#efe9e2',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
    position: 'relative', 
  },
  containerDark: {
    backgroundColor: '#333', 
  },
  toggleButtonContainer: {
    position: 'absolute',
    top: 40,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggleText: {
    color: '#333',
    marginRight: 10,
    fontSize: 16,
    fontWeight: '500',
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
    elevation: 5, 
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#887a7a', 
    marginBottom: 5,
  },
  nameTextDark: {
    color: '#fff', 
  },
  emailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  emailText: {
    fontSize: 16,
    color: '#c0b8b8', 
    marginLeft: 5,
  },
  emailTextDark: {
    color: '#ccc',   
  },
  socialIconsContainer: {
    flexDirection: 'column',
    marginTop: 20,
    width: '100%', 
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#ffafb8', 
    justifyContent: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
  socialText: {
    color: '#fff',
    marginLeft: 5,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default ProfilePageStyles;