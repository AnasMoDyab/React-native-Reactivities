import { Platform, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const primaryBlue = Platform.select({
  ios: "teal", // rgb(0, 122, 255)
  android: "#2196f3" // rgb(33, 150, 243)
});

const imageWidth = "80%";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'white',
    borderRadius: 20,
    padding: 15,
    margin: 10
  },
  forgottenPasswordButtonContainer: {
    width: imageWidth
  },
  forgottenPasswordTitle: {
    color: primaryBlue
  },
  loginButtonContainer: {
    width: imageWidth,
    marginBottom: 10,
    borderRadius: 20,

  },
  loginButton: {
    backgroundColor: 'teal'
  },
  loginButtonTitle: {
    color: "white",
    
  },
  disabled: {
    backgroundColor: primaryBlue,
    opacity: 0.3
  },
  labelInput: {
    color: '#030', 
    marginTop: 10, 
    fontWeight: 'bold'
  }
});

export default styles;