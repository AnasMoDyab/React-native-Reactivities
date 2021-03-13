import React from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';


export default function LoginForm() {
    const navigation = useNavigation();
    return (
        <ScrollView  style={{backgroundColor:'teal'}}>
            <Formik
                initialValues={{ email: '', password: '', error: null }}
                onSubmit={(values, { setErrors }) => console.log(values)}
            >
                {({ handleSubmit, isSubmitting, errors }) => (
                    <View style={styles.container}>
                        <Input
                            label='Email'
                            labelStyle={styles.labelInput}
                            placeholder="Email"
                            keyboardType="email-address"
                            autoCapitalize="none"
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
                            leftIcon={<Ionicons
                                name="key"
                                size={22}
                                color="tomato" />}

                        />
                        <Button
                            title='Sign in'
                            containerStyle={styles.loginButtonContainer}
                            buttonStyle={styles.loginButton}
                            disabledStyle={styles.disabled}
                            titleStyle={styles.loginButtonTitle}
                            disabledTitleStyle={styles.loginButtonTitle}
                            
                        />
                    </View>)}
            </Formik>
        </ScrollView>
    )
}