import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const InpuntField = ({ placeholder, onChangeText, value }) => {

    const onChanges = (value) => {
        console.log(value)
    }
    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                placeholder={placeholder}
                value={value}
            />
        </View>
    )
}

export default InpuntField

const styles = StyleSheet.create({
    input: {
        height: 250,
        width: "85%",
        margin: 12,
        borderWidth: 1,
        padding: 10,
        textAlign: "left",
        textAlignVertical: "top",
        backgroundColor: "white",
        borderRadius: 10,
        alignSelf: "center",
        borderColor: "#6e6e6e",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
})
