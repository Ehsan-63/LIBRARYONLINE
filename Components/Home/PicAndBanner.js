import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  Alert
} from "react-native";
import React from "react";

const PicAndBanner = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
      }}
    >
      <Image
        style={{
          width: "95%",
          height: 150,
          borderTopLeftRadius: 4,
          borderTopRightRadius: 4,
        }}
        source={{
          uri: "https://images.pexels.com/photos/15550234/pexels-photo-15550234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }}
      />
      <View
        style={{
          width: "95%",
          height: 150,
          backgroundColor: "lightgray",
          borderBottomLeftRadius: 4,
          borderBottomRightRadius: 4,
          shadowColor: "blue",
          elevation: 20,
          borderColor:"gray",
          borderBottomWidth:1,
          borderLeftWidth:.5,
          borderRightWidth:.5,
      
        }}
      >
        <TouchableOpacity
          style={{
            width: 90,
            marginTop: 80,
            marginLeft: 50,
            elevation: 10,
          }}
        >
          <Button
            title="More"
            color="#f194ff"
            onPress={() => Alert.alert("Button with adjusted color pressed")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PicAndBanner;

const styles = StyleSheet.create({});
