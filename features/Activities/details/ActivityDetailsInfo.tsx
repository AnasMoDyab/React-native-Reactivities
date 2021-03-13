import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Card, Text, Divider } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ActivitYDetailsInfo() {

    return (
        <Card>
            <Card.Title style={{color:'tomato'}}>Activity Info</Card.Title>
            <Card.Divider style={styles.cardDivider} />
            <Text style={{marginBottom:12}}><Ionicons
                        name="information-circle"
                        size={22}
                        color="teal" />
                Activity 2 months in future
            </Text>
            <Text style={{marginBottom:10}}>
                <Ionicons
                        name="alarm"
                        size={22}
                        color="teal" />
                07 Apr 2021 12:44 PM
            </Text>
            <Text style={{marginBottom:10}}><Ionicons
                        name="earth"
                        size={20}
                        color="teal" />
                  Wembly Stadium, London
            </Text>
           
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