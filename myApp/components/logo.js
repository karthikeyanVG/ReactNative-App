import React from "react";
import { View, StyleSheet, Image } from "react-native";
const logo = ({ source }) => {
  return (
    <Image style={styles.logo} resizeMode="contain" source={source}></Image>
  );
};

const styles = StyleSheet.create({
  continer: {
    flex: 1,
  },
  logo: {
    height: "20%",
    width: 300,
    marginTop: "15%",
    alignSelf: "center",
    marginBottom: 2,
  },
});
export default logo;
