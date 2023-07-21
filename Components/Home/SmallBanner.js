import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const SmallBanner = () => {
  return (
   <TouchableOpacity>
     <View style={styles.container}>
      <Image
        style={{
          width: 407,
          height: 51,
          textAlign: "center",
          paddingVertical: 15,
        }}
        source={{
          uri: "https://images.pexels.com/photos/2228546/pexels-photo-2228546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }}
      />
    </View>
   </TouchableOpacity>
  );
};

export default SmallBanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    height: 55,
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
