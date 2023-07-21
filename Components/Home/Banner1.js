import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import FirstBookSlider from "./FirstBookSlider";

const Banners = () => {
  return (
    <View style={styles.secondContainer}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <TouchableOpacity>
          <Text style={{ color: "black", fontWeight: "bold", paddingLeft: 5 }}>
            The biggest publisher
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ color: "black", fontWeight: "bold", paddingRight: 8 }}>
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <FirstBookSlider />
    </View>
  );
};

export default Banners;

const styles = StyleSheet.create({
  secondContainer: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    minHeight: 100,
    marginBottom: 10,
    paddingBottom: 10,
  },
});
