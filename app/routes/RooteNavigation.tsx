import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './DrawrNavigation';


export default function Navigator() {



  return (
    <NavigationContainer >
      <DrawerNavigation />
    </NavigationContainer>
  );
}



