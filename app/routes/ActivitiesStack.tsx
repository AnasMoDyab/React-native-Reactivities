import React from 'react';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import TouchableScale from 'react-native-touchable-scale';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ActivitiesDashboard from '../../features/Activities/dashboard/ActivitiesDashboard';
import ActivityDetails from '../../features/Activities/details/ActivityDetails';


type Props = {
    navigations: DrawerContentComponentProps
  };
  
  


const Stack = createStackNavigator();

export default function ActivitiesStack({ navigations }: Props){

      return (
        <Stack.Navigator>
          <Stack.Screen
            name="Activities"
            component={ActivitiesDashboard}
            options={{
              title: 'Activities',
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
  
          <Stack.Screen
            name="activityDetails"
            component={ActivityDetails}
            options={{
              title: 'Activities Details',
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