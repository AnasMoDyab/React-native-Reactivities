import React from 'react';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import ActivitiesDashboard from '../../features/Activities/dashboard/ActivitiesDashboard';



type Props = {
    navigations: DrawerContentComponentProps
  };


const Stack = createStackNavigator();

export default function LoginStack(){

    return (
        <Stack.Navigator>
          <Stack.Screen
            name="signUp"
            component={ActivitiesDashboard}
            options={{
              title: 'Sign Up',
              headerStyle: {
                backgroundColor: 'white'
              },
              headerTintColor: 'tomato',
              headerTitleStyle: {
                fontWeight: 'bold',
  
              },
            }}
          />
        </Stack.Navigator>
      )
}