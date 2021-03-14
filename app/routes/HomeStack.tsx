import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../../features/Home/HomePage';
import TouchableScale from 'react-native-touchable-scale';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginForm from '../../features/users/LoginForm';
import RegisterForm from '../../features/users/RegisterForm';
import { DrawerContentComponentProps } from '@react-navigation/drawer';


interface Props {

    navigations: DrawerContentComponentProps

}


const Stack = createStackNavigator();
export default function HomeStack({ navigations }: Props) {


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
                headerLeft: () =>
                    <TouchableScale onPress={() => navigations.navigation.openDrawer()}>
                        <Ionicons name="menu-outline" size={24} />

                    </TouchableScale>
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
    )
}