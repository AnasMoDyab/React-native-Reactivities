import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import '@fortawesome/fontawesome-free/js/all.js';
import RootNavigator from './app/routes/RooteNavigation';


export default function App() {

  return (

      <RootNavigator />

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
