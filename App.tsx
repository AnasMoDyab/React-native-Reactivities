import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import Navigator from './app/routes/Navigator';
import '@fortawesome/fontawesome-free/js/all.js';



export default function App() {

  return (
   <Navigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
