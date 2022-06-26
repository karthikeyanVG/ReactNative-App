import React from 'react';
import { View, StyleSheet, Text, Image, Pressable, TouchableOpacity } from 'react-native';
export const Layout = ({ Children, Contant, style }) => {
    return (
        <View style={styles.box3}>
            <View style={styles.box2} />
            {Children}
            <Text style={[style]}>
                {Children}
                {Contant}
            </Text>
        </View>
    );
}

export const LayoutOne = ({ imageTop, Contant, Children, onPress }) => {
    const hai = () => {
        console.log("gsdgs");
    }
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.LayoutOne}>
                <View style={styles.items} >
                    <View >
                        <Image style={styles.itemsOver} source={imageTop} ></Image>
                    </View>
                    <Text style={styles.text}>
                        {Children}
                        {Contant}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    box2: {
        flex: 1,
        backgroundColor: 'white',
        opacity: 0.5,
        borderRadius: 25,
        height: 650,
        width: "90%",
        marginTop: "30%",
        alignSelf: "center",
        position: "absolute",
        borderColor: '#8c8c8c',
        borderWidth: 0.5,
        alignItems: "center",

    },
    box3: {

        flex: 1,
        width: "100%",
        alignItems: "center",
        position: "absolute",
    },
    LayoutOne: {
        flex: 1,

    },
    items: {
        margin: 40,
        borderRadius: 30,
        height: 170,
        width: 133,
        backgroundColor: 'white',
        alignSelf: "center",
        borderColor: 'black',
        borderWidth: 0.3,

    },
    itemsOver: {
        marginTop: -25,
        borderRadius: 30,
        position: "absolute",
        zIndex: 1,
        height: 71,
        width: 101,
        alignSelf: "center",
        borderColor: 'gray',
        borderWidth: 0.3,
    },
    text: {
        marginTop: "50%",
        alignItems: "center",
        alignSelf: "center",
        fontWeight: "bold"

    },

})