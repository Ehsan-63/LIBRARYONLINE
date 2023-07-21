import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const BigBanner = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{ width: 400, height: 400 }}
          source={{
            uri: "https://images.pexels.com/photos/3251706/pexels-photo-3251706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
        />
      </View>
    </View>
  );
};

export default BigBanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 40,
    marginTop:183,
    marginBottom:55
  },
});
