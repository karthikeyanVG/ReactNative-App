import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native'
import Buttonc from "../assets/buttoncolor.png";
import { TouchableOpacity } from "react-native";
const ButtonC = ({ txt, onPress, onLongPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.touchable} onLongPress={onLongPress}>
            <Image source={Buttonc} style={styles.image} />
            <View style={styles.view}>
                <Text style={styles.text}>{txt}</Text>
            </View>
        </TouchableOpacity>

    )
}

export default ButtonC
const styles = StyleSheet.create({
    view: {
        position: 'absolute',
        backgroundColor: 'transparent',
    },
    touchable: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: "white",
        fontSize: 20,
        textAlign: 'center',

    }

})
