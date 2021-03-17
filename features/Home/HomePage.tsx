import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function HomePage({ navigation }: any) {

    const image = require('../../Images/categoryImages/back.jpg');

    return (

        <ImageBackground source={image} style={styles.image}>
            <View style={styles.container}>
                {false ?
                    <Button

                        onPress={() => navigation.navigate('Activities')}
                        title="Go To Activities"
                        buttonStyle={{ backgroundColor: "red", paddingRight: 20 }}
                        icon={<Ionicons
                            name="log-in-outline"
                            size={24}
                            color="teal" />}


                    />
                    : (
                        <View style={{ alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap', margin: 10, justifyContent: 'space-between' }}>

                            <Button

                                type="outline"
                                raised
                                onPress={() => navigation.navigate('loginForm')}
                                title="Login"
                                containerStyle={styles.loginButtonContainer}
                                buttonStyle={styles.loginButton}
                                titleStyle={styles.loginButtonTitle}
                                icon={<Ionicons
                                    name="log-in-outline"
                                    size={24}
                                    color="white" />}
                            />
                            <View style={{ flex: 0.2 }} />
                            <Button

                                type="outline"
                                onPress={() => navigation.navigate('registerForm')}
                                title="Register"
                                containerStyle={styles.loginButtonContainer}
                                buttonStyle={styles.loginButton}

                                titleStyle={styles.loginButtonTitle}
                                icon={<Ionicons
                                    name="log-in-outline"
                                    size={24}
                                    color="white" />}
                            />
                        </View>

                    )}
            </View>
        </ImageBackground>
    )
}

const imageWidth = "85%";

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,


    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    

    },

    loginButtonContainer: {
        width: imageWidth,
        marginBottom: 30,
        marginLeft: 20,
        borderRadius: 20,

    },
    loginButton: {
        backgroundColor: 'teal'
    },
    loginButtonTitle: {
        color: "white",
        fontWeight: 'bold',
        fontSize: 24

    },
});