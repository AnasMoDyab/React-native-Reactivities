import 'react-native-gesture-handler';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import { createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomePage from '../../features/Home/HomePage';
import ActivitiesDashboard from '../../features/Activities/dashboard/ActivitiesDashboard';
import { Overlay, Text, Button, Divider } from 'react-native-elements'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginForm from './../../features/users/LoginForm';
import RegisterForm from './../../features/users/RegisterForm';
import ActivityDetails from './../../features/Activities/details/ActivityDetails';
import { Appbar, Menu, Provider } from 'react-native-paper';
import { NavigationStackProp } from 'react-navigation-stack';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


type Props = {
  navigation: NavigationStackProp;
};



export default function Navigator({navigation}: Props) {
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const [menuVisible, setMenuVisible] = useState<boolean>(false)
//  const navigation = useNavigation();
/* 
  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (<Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack() } />
        <Appbar.Content title="Project" />
        <Menu visible={menuVisible} onDismiss={() => setMenuVisible(false) } anchor={<Appbar.Action icon="dots-vertical" color="white" onPress={() => setMenuVisible(true)} />}>
          <Menu.Item title="My Action" onPress={() =>console.info("action triggered") } />
        </Menu>
      </Appbar.Header>)
    })
  }, [menuVisible]) */
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
       /*    headerRight: () => (<View style={{ marginTop: 35 }}>
            <Ionicons name="ellipsis-vertical-outline" size={24}
              onPress={openMenu}

            />
            <Menu
              visible={visible}
              onDismiss={closeMenu}
              anchor={
                <Appbar.Action icon="menu" color="white" onPress={openMenu} />
              }>
              <Menu.Item onPress={() => { console.log('Option 1 was pressed') }} title="Option 1" />
              <Menu.Item onPress={() => { console.log('Option 2 was pressed') }} title="Option 2" />
              <Menu.Item onPress={() => { console.log('Option 3 was pressed') }} title="Option 3" disabled />
            </Menu>


          </View>) */


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
    /*         headerRight: ()=> (  <Ionicons name="ellipsis-vertical-outline" size={24}
            onPress={()=>setMenuVisible(true)}

          />) */
         
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
function alert(arg0: string): void {
  throw new Error('Function not implemented.');
}

