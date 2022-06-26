import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Formik } from "formik";
import * as yup from "yup";
import axios from 'axios'
import AppText from '../components/AppText';
import { Layout } from '../components/Layout';
import { PrimaryButton, SecondryButton } from '../components/Buttons';
import AppTextInput from '../components/AppTextInput'
import ErrorMsg from '../components/ErrorMsg'
const baseUrl = 'http://172.16.28.26';
const RegisterScreen = ({ navigation }) => {

    const signupForm = yup.object().shape({
        Email: yup.string().required("Email is Required").email(),
        Password: yup.string().required("Password is Required").min(8),
        Name: yup.string().required("Enter Your Name"),
        Type: yup.string().required("Worker or Customer"),
    });
    /* const onSubmitValues = (values) => {
        console.log(values);
        if (values.Type === "Worker" || values.Type === 'Customer') {
            navigation.navigate('Login')
            alert("please enter your Email and Password")
        } else {
            alert("Should be Worker or Customer")
        }
    } */
    const onSubmitValues = async (userData) => {
        console.log(userData);
        const { Name, Email, Password, Type } = userData

        if (userData.Type === "Worker" || userData.Type === 'Customer') {

            try {
                const response = await axios.post(`${baseUrl}/customer/register`, { Name, Email, Password, Type });
                if (response.status === 201) {
                    alert(` You have created: ${JSON.stringify(response.data)}`);
                    navigation.navigate('Login')

                } else {
                    throw new Error("An error has occurred", error);
                }
            } catch (error) {
                console.log("An error has occurred", error);

            }

            /*  axios
                 .post(url, userData)
                 .then((res) => {
                     const result = res.data
                     const { status, data } = result
 
                     if (status !== 'success') {
                         console.log("error");
                     } else {
                         navigation.navigate('Login')
                         alert("please enter your Email and Password")
                     }
                 })
                 .catch(error => {
                     console.log("Api fail to connect", error);
 
                 }) */

        } else {
            alert("Should be Worker or Customer")
        }
    }
    return (
        <Formik
            initialValues={{ Name: "", Email: "", Password: "", Type: "" }}
            onSubmit={onSubmitValues}
            validationSchema={signupForm}
        >

            {({ handleSubmit, handleChange, errors, setFieldTouched, touched, values }) => (
                <>
                    <View style={{ margin: 10, marginTop: 25 }}>
                        <View style={styles.box1}>
                            <Image style={styles.Image} source={require('../assets/card23x.png')} />
                            <AppText style={styles.text}>
                                Welcome
                            </AppText>
                        </View>
                    </View>
                    <View style={styles.box2}>
                        <Layout />
                        <AppText style={{ marginTop: "35%", }}>Register With</AppText>
                        <View style={styles.icons}>
                            <Image style={styles.image} source={require('../assets/facebookx.png')} />
                            <Image style={styles.image} source={require('../assets/google3x.png')} />
                        </View>
                        <View style={{ marginTop: "10%", marginBottom: "5%" }}>
                            <AppText>NAME</AppText>
                            <AppTextInput
                                placeholder='Please enter your name'
                                keyboardType="default"
                                onChangeText={handleChange("Name")}
                                onBlur={() => setFieldTouched("Name")}
                                value={values.Name}
                            />
                            {touched.Name && errors.Name ? (
                                <ErrorMsg err={errors.Name} />
                            ) : null}
                            <AppText>Email</AppText>
                            <AppTextInput
                                placeholder="Enter Your Email"
                                keyboardType="email-address"
                                underlineColorAndroid="transparent"
                                onChangeText={handleChange("Email")}
                                onBlur={() => setFieldTouched("Email")}
                                value={values.Email}
                            />
                            {touched.Email && errors.Email ? (
                                <ErrorMsg err={errors.Email} />
                            ) : null}
                            <AppText>Login Type</AppText>
                            <AppTextInput
                                placeholder="Worker or Customer"
                                underlineColorAndroid="transparent"
                                onChangeText={handleChange("Type")}
                                onBlur={() => setFieldTouched("Type")}
                                value={values.Type}
                            />
                            {touched.Type && errors.Type ? (
                                <ErrorMsg err={errors.Type} />
                            ) : null}
                            <AppText>PASSWORD</AppText>
                            <AppTextInput
                                placeholder='* * * * * * * *'
                                keyboardType="default"
                                secureTextEntry={true}
                                onChangeText={handleChange("Password")}
                                value={values.Password}
                                onBlur={() => setFieldTouched("Password")}
                            />
                            {touched.Password && errors.Password ? (
                                <ErrorMsg err={errors.Password} />
                            ) : null}
                        </View>
                        <PrimaryButton str='sign up' myPress={handleSubmit} />
                        <AppText style={{ color: "green", paddingTop: "5%", }}>I Already have Account</AppText>
                        <SecondryButton str='sign in' myPress={() => navigation.navigate('Login')} />
                    </View>
                </ >
            )}
        </Formik>
    )
};

export default RegisterScreen;

const styles = StyleSheet.create({
    box1: {

        flex: 1,
        height: 220,
        width: "100%",
        position: "absolute",
    },
    text: {
        color: 'white',
        marginTop: "10%",
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
    box2: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        position: "absolute",

    },
    icons: {
        margin: 10,
        flexDirection: "row",
    },
    image: {
        height: 40,
        width: 40,
        marginHorizontal: 20,

    },
})



