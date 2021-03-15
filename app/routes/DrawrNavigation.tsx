import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer';

import NavigationTab from './NavigationTab';
import ActivitiesStack from './ActivitiesStack';
import ProfileStack from './ProfileStack';
import DrawerContent from './DrawerContent';



const Drawer = createDrawerNavigator();
/* 
const sideNavigation = [
  { label: 'Page 1', location: 'Home' },
  { label: 'Page 2', location: 'Activities' },
  { label: 'Page 3', location: 'Page3' },
] */
 export default function DrawerNavigation(){
    
    return (
        <Drawer.Navigator
           
          drawerStyle={{ width: '60%' }}
          overlayColor="transparent"
          drawerContentOptions={{
            activeTintColor: '#e91e63',
            itemStyle: { marginVertical: 30 },
            
  
          }}
        
          drawerContent={(props) => <DrawerContent {...props}/>}
        >
          <Drawer.Screen name='Home' component={NavigationTab} />
          <Drawer.Screen name='Activities' component={ActivitiesStack} />
          <Drawer.Screen name='Profile' component={ProfileStack} />
        </Drawer.Navigator>
      ) 
}

/* const DrawerNavigator: React.FunctionComponent = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Launch"
      drawerContent={(props) => (
        <DrawerContent {...props} sideNavigation={sideNavigation} />
      )}
    >
      <Drawer.Screen name="Home" component={NavigationTab} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator; */
