import 'react-native-gesture-handler';
import React, { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import '@fortawesome/fontawesome-free/js/all.js';
import RootNavigator from './app/routes/RooteNavigation';



const App: () => ReactNode = () => {
  return (
    <RootNavigator />
  )
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

