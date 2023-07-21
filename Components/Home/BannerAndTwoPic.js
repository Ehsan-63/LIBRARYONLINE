import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";

const BannerAndTwoPic = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{uri:'https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}
        style={styles.containerImageBackground}
      ></ImageBackground>
      <View style={styles.picContainer}>
        <TouchableOpacity>
          <Image
            style={{
              width: 160,
              height: 165,
              
            }}
            source={{
              uri: "https://images.pexels.com/photos/3457273/pexels-photo-3457273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.picContainer}>
        <TouchableOpacity>
          <Image
            style={{
              width: 160,
              height: 165,
              
            }}
            source={{
              uri: "https://images.pexels.com/photos/5473289/pexels-photo-5473289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BannerAndTwoPic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "flex-end",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  containerImageBackground: {
    width: "100%",
    height: 230,
    zIndex: 0,
  },
  picContainer: {
    width: "46%",
    height: 185,
    backgroundColor: "#fff",
    marginTop: -90,
    justifyContent:"center",
    alignItems:"center",

  },
});
