import React from 'react';
import { Button, Card, Icon, Text } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function ActivityDetailsHeader() {

    return (
        <Card>
            <Card.Image source={require('../../../Images/categoryImages/drinks.jpg')}>
                <Text style={{ top: 80, color:'white' , marginLeft: 20, fontWeight:'bold'}}>
                   Feture Activity
                </Text>
                <Text style={{ marginTop: 85 , color:'white', marginLeft: 20, fontWeight:'bold' }}>
                    07 may 2021
                </Text>
                <Text style={{ marginBottom:20,  color:'white', marginLeft: 20, fontWeight:'bold' }}>
                  Hosted By Bob
                </Text>
                <Card.Title style={{flex:2, color:'white',fontWeight:'bold', bottom:0, top:60, left:-100}}>HELLO WORLD</Card.Title>
                
                
            </Card.Image>
            <Card.Divider />
            <Button
                    containerStyle={{borderColor:'black'}}
                    icon={<Ionicons  size={18} name='settings' color='#ffffff' />}
                    buttonStyle={{ borderRadius: 10,marginBottom: 10, backgroundColor:'tomato', borderColor:'black' }}
                    title='Manage Event' />
                    <Button
                    icon={<Ionicons name='trash' color='white' size={20}/>}
                    titleStyle={{color:'white'}}
                    buttonStyle={{ borderRadius: 10,  backgroundColor:'teal' }}
                    title='Cancel Activity' />
        </Card>
    )
}