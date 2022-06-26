import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import ButtonC from "./ButtonC";
const ImageInput = ({ image, onchangeImage, onPress, txt }) => {
  function handlePress() {
    if (!image) {
      selectImage();
    } else {
      Alert.alert("Alert", "Dletet this image", [
        { text: "No", onPress: () => console.log("Image not deleted") },
        { text: "yes", onPress: () => onchangeImage(null) },
      ]);
    }
  }

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      console.log(result);

      if (!result.cancelled) onchangeImage(result.uri);
    } catch (error) {
      ("err");
    }
  };

  return (
    <ButtonC onPress={handlePress} txt={txt}>
      <View>
        {image && (
          <Image source={{ uri: image }} style={{ height: 100, width: 100 }} />
        )}
      </View>
    </ButtonC>
  );
};


export default ImageInput;
