import React, { useState } from "react";
import { View, StyleSheet, FlatList, ScrollView } from "react-native";
import ImageInput from "./ImageInput";

function ImageInputList({ imageuris = [], onRemove, onAddImage, txt }) {
  return (
    <ScrollView horizontal style={styles.container}>
      <ImageInput onchangeImage={(uri) => onAddImage(uri)} txt={txt} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 2,
    flexDirection: "row",
  },
});

export default ImageInputList;
