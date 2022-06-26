import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
const Buttons = ({ myPress, color, str }) => {
  return (
    <>
      <TouchableOpacity
        onPress={myPress}
        style={[styles.Button, { backgroundColor: color }]}
      >
        <Text style={styles.text}>{str}</Text>
      </TouchableOpacity>
    </>
  );
};

export default Buttons;

export const PrimaryButton = ({ myPress, color, str }) => {
  return (
    <TouchableOpacity
      onPress={myPress}
      style={[styles.PrimaryButton, { backgroundColor: color }]}
    >
      <View>
        <Text style={styles.text}>{str}</Text>
      </View>
    </TouchableOpacity>
  );
}

export const SecondryButton = ({ myPress, color, str }) => {
  return (
    <TouchableOpacity
      onPress={myPress}
      style={[styles.SecondryButton, { backgroundColor: color }]}
    >
      <View>
        <Text style={styles.text}>{str}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Button: {
    borderRadius: 30,
    width: 160,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 7,
    borderColor: "black",
    borderWidth: 1,
    borderEndColor: "gray",
  },
  text: {
    color: "black",
    alignSelf: "center",
    fontWeight: "bold",
  },
  PrimaryButton: {
    borderRadius: 10,
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 7,
    borderColor: "gray",
    borderWidth: 0.5,
    borderEndColor: "gray",
  },
  SecondryButton: {
    borderRadius: 10,
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 7,
    borderColor: "#C84AED",
    borderWidth: 1,
    borderEndColor: "#C84AED",

  }
});
