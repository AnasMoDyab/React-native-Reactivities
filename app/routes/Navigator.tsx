import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Button, StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomePage from '../../features/Home/HomePage';
import ActivitiesDashboard from '../../features/Activities/dashboard/ActivitiesDashboard';
import { Icon } from 'react-native-elements'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginForm from './../../features/users/LoginForm';
import RegisterForm from './../../features/users/RegisterForm';
import ActivityDetails from './../../features/Activities/details/ActivityDetails';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export default function Navigator({ navigation }: any) {

  const Home = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: 'white'
          },
          headerTintColor: 'tomato',
          headerTitleStyle: {
            fontWeight: 'bold',

          },
        }} />

        <Stack.Screen name="loginForm" component={LoginForm} options={{
          title: 'Sign in',
          headerStyle: {
            backgroundColor: 'white'
          },
          headerTintColor: 'tomato',
          headerTitleStyle: {
            fontWeight: 'bold',

          },
        }} />

        <Stack.Screen name="registerForm" component={RegisterForm} options={{
          title: 'Sign up',
          headerStyle: {
            backgroundColor: 'white'
          },
          headerTintColor: 'tomato',
          headerTitleStyle: {
            fontWeight: 'bold',

          },
        }} />

      </Stack.Navigator >
    );
  }

  const Activities = ({ navigation }: any) => {

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

  const SignUp = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="signUp"
          component={ActivitiesDashboard}
          options={{
            title: 'Sign Up',
            headerStyle: {
              backgroundColor: '#C70039'
            },
            headerTintColor: '#E9E9F2',
            headerTitleStyle: {
              fontWeight: 'bold',

            },
          }}
        />
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
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
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },

        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }} >

        {false ?
          <Tab.Screen name="signUp" component={SignUp} />
          : (
            <>
              <Tab.Screen name="Home" component={Home} />
              <Tab.Screen name="Activities" component={Activities} />
            </>

          )
        }
      </Tab.Navigator>



    </NavigationContainer>
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
