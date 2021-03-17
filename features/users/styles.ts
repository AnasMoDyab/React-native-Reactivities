import { Dimensions, Platform, StyleSheet } from "react-native";
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
   
  },

  registerConteiner: {
    width: Dimensions.get("window").width, //for full screen
    height: Dimensions.get("window").height //for full screen
  },
  fixed: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
 scrollview: {
   backgroundColor: 'transparent',
 
 },
  formContainer : {
    marginTop: 70,
    width: '90%',
    alignItems: "center"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
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