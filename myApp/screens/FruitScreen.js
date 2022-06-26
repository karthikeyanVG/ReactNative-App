import React, { useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import ButtonC from '../components/ButtonC';
const FruitScreen = ({ navigation }) => {

    const [AppleQ, setAppleQ] = useState(0);
    const [OrangeQ, setOrangeQ] = useState(0);
    const [PapayaQ, setPapayaQ] = useState(0);
    const [MangoQ, setMangoQ] = useState(0);

    const VegetablePress = () => {
        console.log("vegetable Screen");
        navigation.navigate('vegetable')
    }
    const FruitsPress = () => {
        navigation.navigate('fruits')

    }
    const onAppleQ = () => {
        setAppleQ((prevValue) => prevValue + 1)
    }
    const onAppleDec = () => {
        setAppleQ((prevValue) => prevValue - 1)
    }
    const onOrangeQ = () => {
        setOrangeQ((prevValue) => prevValue + 1)
    }
    const onOrangeDec = () => {
        setOrangeQ((prevValue) => prevValue - 1)
    }
    const onPapayaQ = () => {
        setPapayaQ((prevValue) => prevValue + 1)
    }
    const onPapayaDec = () => {
        setPapayaQ((prevValue) => prevValue - 1)
    }
    const onMangoQ = () => {
        setMangoQ((prevValue) => prevValue + 1)
    }
    const onMangoDec = () => {
        setMangoQ((prevValue) => prevValue - 1)
    }
    return (
        <View>
            <View style={{ margin: 10, marginTop: 30 }}>
                <View style={styles.box1}>
                    <Image style={styles.Image} source={require('../assets/veg.png')} />
                </View>
            </View>
            <View>
                <Image style={styles.bg} source={require('../assets/Bgcolor.png')} />
                <Text style={styles.text}>
                    Vegatable & Fruits
                </Text>
                <View style={styles.grid}>
                    <ButtonC txt={"VEGETABLES"} onPress={() => VegetablePress()} />
                    <ButtonC txt={"FRUITS"} />
                </View>
                <View>
                    <Image style={styles.imgX} source={require('../assets/imgX.png')} />
                </View>
                <View style={styles.grid}>
                    <View style={styles.col}>
                        <ButtonC txt={"APPLE"} />
                        <ButtonC txt={"ORANGE"} />
                        <ButtonC txt={"PAPAYA"} />
                        <ButtonC txt={"MANGO"} />
                        <ButtonC txt={"GUAVA"} />
                        <ButtonC txt={"PINEAPPLE"} />
                    </View>
                    <View style={styles.col}>
                        <ButtonC txt={"QTY" + " " + AppleQ} onPress={onAppleQ} onLongPress={onAppleDec} />
                        <ButtonC txt={"QTY" + " " + OrangeQ} onPress={onOrangeQ} onLongPress={onOrangeDec} />
                        <ButtonC txt={"QTY" + " " + PapayaQ} onPress={onPapayaQ} onLongPress={onPapayaDec} />
                        <ButtonC txt={"QTY" + " " + MangoQ} onPress={onMangoQ} onLongPress={onMangoDec} />
                        <ButtonC txt={"QTY 0"} />
                        <ButtonC txt={"QTY 0"} />

                    </View>

                </View>
            </View >
        </View >
    )
}

export default FruitScreen

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
    }

})
