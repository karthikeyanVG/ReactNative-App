import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Formik } from "formik"
import * as yup from "yup";
import axios from 'axios';
import AppText from '../components/AppText';
import { Layout } from '../components/Layout';
import { PrimaryButton, SecondryButton } from '../components/Buttons';
import AppTextInput from '../components/AppTextInput';

const LoginScreen = ({ navigation }) => {

    const [loading, setLoading] = useState(false);
    const [signin, setSetsigin] = useState('Sign in');
    const [signUp, setSetsigUp] = useState('Sign Up');

    /* function auth(values) {
        if (
            values.email === "karthi@gmail.com" || "arun@gmail.com" &&
            values.password === "12345678" || "00000000"
        ) {
            alert(`${values.email}  Welcome`);
            console.log(values.email);
            navigation.navigate('Items')
        } else {
            alert("Not valied Email or Prassword");
        }
    } */

    const validationSchema = yup.object().shape({
        email: yup.string().required("email is Required").email(),
        password: yup.string().required("password is Required"),
    });
    const ToSignup = () => {
        navigation.navigate('Register')
        console.log("hah")

    }

    const auth = async (userData) => {
        console.log(userData);
        const url = 'http://localhost:8080/customer/login'
        axios
            .post(url, userData)
            .then((res) => {
                const result = res.data
                const { status, data } = result

                if (status !== 'success') {
                    console.log("error");
                } else {
                    navigation.navigate('Items')
                }
            })
            .catch(error => {
                console.log("Api fail to connect", error);

            })
    };

    return (
        <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => auth(values)}
            validationSchema={validationSchema}
        >
            {({ handleChange, handleSubmit, errors, setFieldTouched, touched, values }) => (
                <>
                    <View style={{ margin: 10, marginTop: 25, }}>
                        <View style={styles.box1}>
                            <Image style={styles.Image} source={require('../assets/card23x.png')} />
                            <AppText style={styles.text}>
                                Welcome
                            </AppText>
                        </View>
                    </View>
                    <View style={styles.box2}>
                        <Layout />
                        <AppText style={styles.login}>Login </AppText>
                        <View style={{ marginTop: "75%", marginBottom: 60 }}>
                            <AppText>email</AppText>
                            <AppTextInput
                                placeholder='Please enter your phone number'
                                keyboardType="default"
                                underlineColorAndroid="transparent"
                                onChangeText={handleChange("email")}
                                value={values.email}
                                onBlur={() => setFieldTouched("email")}
                            />
                            <AppText>password</AppText>
                            <AppTextInput
                                placeholder='* * * * * * * *'
                                keyboardType="default"
                                secureTextEntry={true}
                                value={values.password}
                                onChangeText={handleChange("password")}
                                onBlur={() => setFieldTouched("password")}
                            />
                        </View>
                        <SecondryButton str={signin} myPress={handleSubmit} />
                        <AppText style={{ color: "green", paddingTop: 20, }}>New User I haven't Account</AppText>
                        <PrimaryButton str={signUp} myPress={ToSignup} />
                    </View>
                </>
            )}
        </Formik>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    box1: {
        flex: 1,
        height: 220,
        width: "100%",
        position: "absolute",
        alignItems: "center",

    },
    box2: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        position: "absolute",

    },
    text: {
        color: 'white',
        marginTop: 35,
        alignSelf: 'center',
        fontSize: 35,
    },
    Image: {
        borderRadius: 30,
        marginTop: 1,
        height: 220,
        width: "100%",
        opacity: 0.7,
        position: "absolute",
    },
    login: {
        color: 'black',
        marginTop: "40%",
        alignSelf: 'center',
        fontSize: 35,
        position: "absolute",
    },
})