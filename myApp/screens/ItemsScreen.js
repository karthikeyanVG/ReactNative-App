import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AppText from '../components/AppText';
import { Layout, LayoutOne } from '../components/Layout';
import { Searchbar } from 'react-native-paper';
const ItemsScreen = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const vegetables = () => {
        navigation.navigate('vegetable')
        console.log("vegetable");
    }
    const Fruits = () => {
        navigation.navigate('fruits')
        console.log("Fruits");
    }
    const Medicine = () => {
        console.log("Medicine");
        navigation.navigate('medicine')
    }
    const Grocery = () => {
        console.log("Grocery");
        navigation.navigate('grocery')
    }
    return (
        <>
            <View style={{ margin: 10, marginTop: 30 }}>
                <View style={styles.box1}>
                    <Image style={styles.Image} source={require('../assets/header.png')} />
                    <AppText style={styles.text}>
                        Happy to help you
                    </AppText>

                    <View style={styles.searchBox}>
                        <Searchbar
                            placeholder="Search"
                            onChangeText={onChangeSearch}
                            value={searchQuery}
                        />
                    </View>
                </View>
            </View>
            <Layout />
            <View style={styles.box2}>
                <View style={styles.content} >
                    <View style={{ flexDirection: 'row' }}>
                        <View >
                            <LayoutOne imageTop={require('../assets/veg.png')}
                                Contant={"vegetables"}
                                onPress={() => vegetables()}
                            />
                        </View>
                        <View >
                            <LayoutOne imageTop={require('../assets/veg.png')}
                                Contant={"Fruits"}
                                onPress={() => Fruits()}
                            />
                        </View>
                    </View>
                    <View >
                        <View style={{ flexDirection: 'row', }} >
                            <View >
                                <LayoutOne imageTop={require('../assets/medical.jpg')}
                                    Contant={"Medicine"}
                                    onPress={() => Medicine()} />
                            </View>
                            <View>
                                <LayoutOne imageTop={require('../assets/grocery.jpeg')}
                                    Contant={"Grocery"}
                                    onPress={() => Grocery()} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>


        </>
    )
}

export default ItemsScreen;

const styles = StyleSheet.create({
    box1: {

        flex: 1,
        height: 220,
        width: "100%",
        position: "absolute",

    },
    text: {
        color: 'white',
        marginTop: 45,
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
        zIndex: 1,
        marginTop: 25,
        flex: 1,
        width: "100%",
        alignItems: "center",
        position: "absolute",
    },
    content: {
        marginTop: "55%",
        flexDirection: 'column',
    },
    searchBox: {
        flex: 1,
        margin: 20,
        marginTop: 50,
    },

})
