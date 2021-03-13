import React from 'react';
import { TextInput, StyleSheet, View  } from 'react-native';
import { Card,  Button, Icon } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ActivitYDetailsChat() {

    return (
        <Card>
            <Card.Title style={styles.cardTitle}>Activity Chat</Card.Title>
            <View style={styles.textAreaContainer} >
                <TextInput
                    style={styles.textArea}
                    underlineColorAndroid="transparent"
                    placeholder="Type something"
                    placeholderTextColor="grey"
                    numberOfLines={10}
                    multiline={true}
                    onChangeText={(value) => console.log(value)}
                />
                 
            </View>
            <Button
                    containerStyle={{borderColor:'black', marginTop: 20}}
                    icon={<Ionicons size={22} name='chatbubble-outline' color='#ffffff' />}
                    buttonStyle={{ borderRadius: 10,marginBottom: 10, backgroundColor:'tomato', borderColor:'black' }}
                    title='Send Comment' />
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
    },
    textAreaContainer: {
        borderColor: 'teal',
        borderWidth: 1,
        padding: 5
    },
    textArea: {
        height:80,
        justifyContent: "flex-start"
    }
})