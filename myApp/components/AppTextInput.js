import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View } from "react-native";
import AppText from "./AppText";
const AppTextInput = ({ placeholder, style, ...otherProps }) => {
  return (
    <SafeAreaView>
      <View style={styles.continer, style}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          {...otherProps}

        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 330,
    borderWidth: 1,
    padding: 10,
    marginVertical: "2%"
  },
  continer: {
    margin: "10%",

  },
});

export default AppTextInput;
