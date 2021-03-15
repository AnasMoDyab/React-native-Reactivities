import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerContentComponentProps, DrawerContentOptions } from '@react-navigation/drawer';
import Profile from '../../features/profile/Profile';
import TouchableScale from 'react-native-touchable-scale';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Stack = createStackNavigator();

type Props =  DrawerContentComponentProps<DrawerContentOptions>
  

export default function ProfileStack({ navigation }: Props){

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
              <TouchableScale onPress={() => navigation.toggleDrawer()}>
                  <Ionicons style={{padding: 10}} name="menu-outline" size={35} />

              </TouchableScale>
            }}
          />
  
    
        </Stack.Navigator>
      )
}