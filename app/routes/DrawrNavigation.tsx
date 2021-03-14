import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import NavigationTab from './NavigationTab';
import ActivitiesStack from './ActivitiesStack';
import ProfileStack from './ProfileStack';


const Drawer = createDrawerNavigator();
export default function DrawerNavigation(){
    
    return (
        <Drawer.Navigator
          drawerStyle={{ width: '60%' }}
          overlayColor="transparent"
          drawerContentOptions={{
            activeTintColor: '#e91e63',
            itemStyle: { marginVertical: 30 },
  
          }}
          drawerContent={(navigations: DrawerContentComponentProps) => <DrawerContent navigation={navigations} />}
        >
          <Drawer.Screen name='Home' component={NavigationTab} />
          <Drawer.Screen name='Activities' component={ActivitiesStack} />
          <Drawer.Screen name='Profile' component={ProfileStack} />
        </Drawer.Navigator>
      )
}