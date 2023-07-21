import { StyleSheet, View } from "react-native";
import React from "react";
import BookSlider from "./SecondBookSlider";

const Banners = () => {
  return (
    <View style={{ flex: 1 }}>
      <BookSlider />
    </View>
  );
};

export default Banners;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    minHeight: 100,
    marginBottom: 10,
    paddingBottom: 10,
  },
});
