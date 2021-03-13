import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Card, Text, Avatar } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ActivitYDetailsAttendee() {

    return (
        <Card>
            <Card.Title style={styles.cardTitle}>People Going</Card.Title>
            <View>
                <Text style={{ top:0, left:60}}> Bob  </Text>
                <Text style={{   left:60, top:5, color:'tomato', bottom:40 }}>Following</Text>
                <Avatar
                    containerStyle={{flex: 1, marginLeft: 0, marginTop: -40, marginBottom:20}}
                    size="medium"
                    source={require('../../../Images/categoryImages/drinks.jpg')}
                />
               
             <Card.Divider />
             <Text style={{ top:0, left:60}}> Tony  </Text>
                <Text style={{   left:60, top:5, color:'tomato', bottom:40 }}>Following</Text>
                <Avatar
                    containerStyle={{flex: 1, marginLeft: 0, marginTop: -40}}
                    size="medium"
                    source={require('../../../Images/categoryImages/drinks.jpg')}
                />

            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    cardTitle: {
        color: 'white',
        backgroundColor: 'teal',
        height: 40,
        paddingTop: 10,
        top: -16,
        left: -18,
        right: 0,
        width: '110%'
    },
    cardDivider: {
        backgroundColor: 'teal'
    }
})