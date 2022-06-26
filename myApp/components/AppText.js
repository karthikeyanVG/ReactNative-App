import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

const AppText = ({ children, text, style }) => {
  return (
    <Text style={[styles.text, style]}>
      {children}
      {text}
    </Text>
  );
};

export default AppText;
const styles = StyleSheet.create({
  text: {
    paddingLeft: 12,
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
