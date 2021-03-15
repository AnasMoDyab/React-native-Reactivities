import React from 'react';
import {
  DrawerContentOptions,
  DrawerContentComponentProps,
} from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack';

import TouchableScale from 'react-native-touchable-scale';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ActivitiesDashboard from '../../features/Activities/dashboard/ActivitiesDashboard';
import ActivityDetails from '../../features/Activities/details/ActivityDetails';
import { DrawerActions } from '@react-navigation/native';


type Props =  DrawerContentComponentProps<DrawerContentOptions>
  


const Stack = createStackNavigator();

export default function ActivitiesStack({ navigation }: Props){

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
              (<TouchableScale  onPress={() => navigation.dispatch(DrawerActions.openDrawer())} >
                  <Ionicons style={{padding: 10}} name="menu-outline" size={35} />
              </TouchableScale>)
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