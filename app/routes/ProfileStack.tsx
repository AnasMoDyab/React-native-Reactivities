import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import Profile from '../../features/profile/Profile';
import TouchableScale from 'react-native-touchable-scale';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Stack = createStackNavigator();

type Props = {
    navigations: DrawerContentComponentProps
  };
  

export default function ProfileStack({ navigations }: Props){

    return (
        <Stack.Navigator>
          <Stack.Screen
            name="Profiles"
            component={Profile}
            options={{
              title: 'Profile',
              headerStyle: {
                backgroundColor: 'white'
              },
              headerTintColor: 'tomato',
              headerTitleStyle: {
                fontWeight: 'bold',
  
              },
              headerLeft: () =>
              <TouchableScale onPress={() => navigations.navigation.openDrawer()}>
                  <Ionicons name="menu-outline" size={24} />

              </TouchableScale>
            }}
          />
  
    
        </Stack.Navigator>
      )
}