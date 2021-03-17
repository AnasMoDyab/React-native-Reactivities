import React, { useState } from 'react';
import { ScrollView, View, ImageBackground } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from "./styles";
import { Formik } from 'formik';
import { useStore } from './../../app/stores/store';



export default function LoginForm() {
    const { userStore } = useStore();
    const image = require('../../Images/categoryImages/back.jpg');
    return (
        <ImageBackground source={image} style={styles.image}>
          <View  style={styles.container}>
            <Formik
            
                initialValues={{ email: '', password: '', error: null }}
                onSubmit={(values, { setErrors }) => userStore.login(values)
                    .catch(error => setErrors({ error: "Invalid email or password" }))
                }
            >
                {({ handleChange, handleBlur, handleSubmit, values, isSubmitting, errors }) => (
                    <View  style={styles.formContainer}>
                        <Input
                            label='Email'
                            labelStyle={styles.labelInput}
                            placeholder="Email"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            onChangeText={handleChange('email')}
                            value={values.email}
                            onBlur={handleBlur('email')}
                            leftIcon={<Ionicons
                                name="mail"
                                size={22}
                                color="tomato" />}
                        />
                        <Input
                            label='Password'
                            labelStyle={styles.labelInput}
                            placeholder="Password"
                            secureTextEntry
                            autoCapitalize="none"
                            onChangeText={handleChange('password')}
                            value={values.password}
                            onBlur={handleBlur('password')}
                            leftIcon={<Ionicons
                                name="key"
                                size={22}
                                color="tomato" />}

                        />
                        <Text>{errors.error}</Text>

                        <Button
                            loading={isSubmitting}
                            onPress={handleSubmit}
                            title='Sign in'
                            containerStyle={styles.loginButtonContainer}
                            buttonStyle={styles.loginButton}
                            disabledStyle={styles.disabled}
                            titleStyle={styles.loginButtonTitle}
                            disabledTitleStyle={styles.loginButtonTitle}

                        />
                      
                    </View>)}
            </Formik>
        </View>
        </ImageBackground>
   
    )
}