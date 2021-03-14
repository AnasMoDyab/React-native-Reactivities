import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginStack from './LoginStack';
import HomeStack from './HomeStack';
import ActivitiesStack from './ActivitiesStack';
import ProfileStack from './ProfileStack';


const Tab = createBottomTabNavigator();

export default function NavigationTab () {


        return (
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'Home') {
                    iconName = focused
                      ? 'home'
                      : 'home-outline';
                  } else if (route.name === 'Activities') {
                    iconName = focused ? 'ios-list' : 'ios-list';
                  } else if (route.name === 'signUp') {
                    iconName = focused ? 'lock-closed-outline' : 'lock-closed';
                  }else if(route.name ==='Profile') {
                    iconName = focused ? 'person' : 'person-outline';
                  }
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
      
              })}
              tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
              }} >
      
              {false ?
                <Tab.Screen name="signUp" component={LoginStack} />
                : (
                  <>
                    <Tab.Screen name="Home" component={HomeStack} />
                    <Tab.Screen name="Activities" component={ActivitiesStack} />
                    <Tab.Screen name="Profile" component={ProfileStack} />
                  </>
      
                )
              }
            </Tab.Navigator>
          )
}