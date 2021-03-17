import React from 'react';
import { ImageBackground, ScrollView, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';


export default function RegisterForm() {
    const image = require('../../Images/categoryImages/back.jpg');
    return (
        <View>
         
        <ScrollView style={[styles.scrollview]}>
            <Formik
                initialValues={{ firstName: '', lastName: '', email: '', password: '', error: null }}
                onSubmit={(values, { setErrors }) => console.log(values)}
            >
                {({ handleSubmit, isSubmitting, errors }) => (
                    <View style={styles.formContainer}>
                        <Input
                            label='First Name'
                            labelStyle={styles.labelInput}
                            placeholder="First Name"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            
                            leftIcon={<Ionicons
                                name="person"
                                size={22}
                                color="tomato" />}
                        />
                        <Input
                            label='Last Name'
                            labelStyle={styles.labelInput}
                            placeholder="Last Name"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            leftIcon={<Ionicons
                                name="person"
                                size={22}
                                color="tomato"  />}
                        />
                        <Input
                            label='Email'
                            labelStyle={styles.labelInput}
                            placeholder="Email"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            leftIcon={<Ionicons
                                name="mail"
                                size={22}
                                color="tomato"  />}
                        />
                        <Input
                            label='Password'
                            labelStyle={styles.labelInput}
                            placeholder="Password"
                            secureTextEntry
                            autoCapitalize="none"
                            leftIcon={<Ionicons
                                name="key"
                                size={22}
                                color="tomato"  />}

                        />
                        <Input
                            label='Confirm Password'
                            labelStyle={styles.labelInput}
                            placeholder="Confirm Password"
                            secureTextEntry
                            autoCapitalize="none"
                            leftIcon={<Ionicons
                                name="key"
                                size={22}
                                color="tomato"  />}

                        />

                        <Button
                            title='Sign up'
                            containerStyle={styles.loginButtonContainer}
                            buttonStyle={styles.loginButton}
                            disabledStyle={styles.disabled}
                            titleStyle={styles.loginButtonTitle}
                            disabledTitleStyle={styles.loginButtonTitle}
                            icon={<Ionicons
                                name="log-in-outline"
                                size={28}
                                color="white"  />}
                        />
                    </View>)}
            </Formik>
        </ScrollView>
        <ImageBackground
            style={[styles.fixed, styles.registerConteiner, {zIndex: -1}]}
            source={image}
        />
        </View>
    )
}