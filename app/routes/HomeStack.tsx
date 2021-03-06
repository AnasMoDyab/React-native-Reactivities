import React, { FunctionComponent } from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import HomePage from '../../features/Home/HomePage';
import TouchableScale from 'react-native-touchable-scale';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginForm from '../../features/users/LoginForm';
import RegisterForm from '../../features/users/RegisterForm';
import { Button } from 'react-native-elements';
import {
    DrawerContentOptions,
    DrawerContentComponentProps,
  } from '@react-navigation/drawer'
import { DrawerActions } from '@react-navigation/native';


type Props =  DrawerContentComponentProps<DrawerContentOptions>


const Stack = createStackNavigator();
 function HomeStack ({ navigation }: Props) {
         return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomePage} options={{
                headerTitle:'Home',
                headerTransparent:true,
                headerShown:true,
                headerLeft: () =>
                (<TouchableScale onPress={() => navigation.dispatch(DrawerActions.openDrawer())} >
                    <Ionicons style={{padding: 10}} name="menu-outline" size={35} />
                </TouchableScale>)
            }} />

            <Stack.Screen name="loginForm" component={LoginForm} options={{
                headerTitle:'Sign in',
               headerTransparent:true,
               headerShown:true,
                             

            }} />

            <Stack.Screen name="registerForm" component={RegisterForm} options={{
                headerTitle:'Register',
                 headerTransparent:true,
                 headerShown:true,
            }} />

        </Stack.Navigator >
    )
}

export default HomeStack;