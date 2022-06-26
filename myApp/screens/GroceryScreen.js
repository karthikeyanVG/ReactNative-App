import React, { useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import ButtonC from '../components/ButtonC';
import InpuntField from '../components/InpuntField';

const GroceryScreen = () => {
    const [text, setText] = useState("");
    const onTextChange = (event) => {
        setText(event)
    }
    const Submit = () => {
        console.log(text)
    }
    return (
        <View>
            <View style={{ margin: 10, marginTop: 30 }}>
                <View style={styles.box1}>
                    <Image style={styles.Image} source={require('../assets/groo.png')} />
                </View>
            </View>
            <View>
                <Image style={styles.bg} source={require('../assets/Bgcolor.png')} />
                <Text style={styles.text}>
                </Text>
                <View style={styles.grid}>
                    <ButtonC txt={"GROCERY"} />
                </View>
                <View>
                    <Image style={styles.imgX} source={require('../assets/imgX.png')} />
                </View>
                <View style={styles.InpuntField}>
                    <InpuntField
                        placeholder={"Write your grocery here...."}
                        onChangeText={(event) => onTextChange(event)}
                        value={text} />
                </View>
                <View style={styles.grid}>
                    <ButtonC txt={"OK"} onPress={() => Submit()} />
                </View>
            </View >
        </View >
    )
}

export default GroceryScreen

const styles = StyleSheet.create({
    box1: {
        flex: 1,
        height: 220,
        width: "100%",
        position: "absolute",
    },
    Image: {
        borderRadius: 30,
        marginTop: 1,
        height: 220,
        width: "100%",
        opacity: 0.7,
        backgroundColor: "black",
        position: "absolute",
    },
    text: {
        color: 'white',
        marginTop: "36%",
        alignSelf: 'center',
        fontSize: 25,
    },
    bg: {
        alignSelf: "center",
        height: 650,
        width: "90%",
        marginTop: "25%",
        position: "absolute",
        zIndex: 0
    },
    grid: {
        flexDirection: "row",
        alignSelf: "center"
    },
    col: {
        flexDirection: "column"
    },
    imgX: {
        alignSelf: "center"
    },
    InpuntField: {
        marginTop: "8%"
    }

})

