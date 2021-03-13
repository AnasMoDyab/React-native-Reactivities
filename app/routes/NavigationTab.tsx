import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../../features/Home/HomePage';


const Tab = createBottomTabNavigator();

export default function NavigationTab () {

    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomePage} />
            
         </Tab.Navigator>

    );
}