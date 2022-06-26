
import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image } from 'react-native';
import Button from '../components/Buttons';
import Logo from '../components/logo';
const WelcomeScreen = ({ navigation }) => (
    <>
        <ImageBackground
            style={styles.container}
            source={require("../assets/background1.png")}
            blurRadius={5}
        >
            <Logo source={require("../assets/logoW.png")} />
            <View style={styles.view1}>
                <View style={styles.box} />
                <Text style={styles.text}>
                    This is the new way
                    to buy a things to
                    your home
                </Text>
                {/* </View> */}
            </View>
            < View>

            </View>
            <View style={styles.button}>
                <Button str="SIGNUP" myPress={() => navigation.navigate('Register')}></Button>
                <Button str="LOGIN" myPress={() => navigation.navigate('Login')}></Button>
            </View>
        </ImageBackground>
    </>
);

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        height: "100%",
    },
    view1: {
        flexDirection: "row",
        height: 300,
        width: "90%",
        marginTop: "9%",
        alignSelf: "center",
        marginLeft: 40,
        alignItems: "center"
    },
    box: {
        backgroundColor: "#C4C4C4",
        opacity: 0.3,
        borderRadius: 20,
        height: 300,
        width: "90%",
        marginTop: "40%",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        zIndex: 0

    },
    button: {

        marginTop: "40%",
        justifyContent: "center",
        flexDirection: 'row'
    },
    text: {
        color: "white",
        fontSize: 30,
        textAlign: "center",
        padding: 25,


    }
})