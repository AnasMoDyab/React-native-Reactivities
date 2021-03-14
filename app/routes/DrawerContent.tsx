import React from 'react';
import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import { StyleSheet, View } from 'react-native';
import { Avatar, Icon, Text } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {

    navigation: DrawerContentComponentProps

}

export default function DrawerContent({ navigation }: Props) {


    return (
        <View style={{ flex: 1, backgroundColor:'white' }}>
            <DrawerContentScrollView >
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar
                                rounded
                                source={require('../../Images/categoryImages/culture.jpg')}
                                size={60}
                                onPress={()=> navigation.navigation.navigate('Profile')}
                            />
                            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                <Text style={styles.title}>John Doe</Text>
                                <Text style={styles.caption}>@j_doe</Text>
                            </View>
                        </View>
                    </View>

           

                <View>
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Ionicons
                                name="home"
                                color='teal'
                                size={size}
                            />
                        )}
                        labelStyle={styles.labelStyle}
                        label="Home"
                        onPress={() => { navigation.navigation.navigate('Home') }}
                    />

                   
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Ionicons
                                name="log-out"
                                color='teal'
                                size={size}
                            />
                        )}
                        labelStyle={styles.labelStyle}
                        label="Log out"
                        onPress={() => { navigation.navigation.navigate('Home') }}
                    />
                </View>
                </View>
            </DrawerContentScrollView>

        </View>
    );
}






const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
        backgroundColor:'teal',
        paddingBottom: 20
      
    },
    labelStyle: {
        color:'tomato', 
        fontWeight:'bold'
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
        color:'white'
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        color:'white'
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});