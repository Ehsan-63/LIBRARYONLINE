import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const AlbumPIc = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.pic}>
          <Image
            style={styles.images}
            source={{
              uri: "https://images.pexels.com/photos/3196043/pexels-photo-3196043.jpeg?auto=compress&cs=tinysrgb&w=300",
            }}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.pic}>
          <Image
            style={styles.images}
            source={{
              uri: "https://images.pexels.com/photos/3933278/pexels-photo-3933278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.pic}>
          <Image
            style={styles.images}
            source={{
              uri: "https://images.pexels.com/photos/15570514/pexels-photo-15570514/free-photo-of-love-writing-vintage-antique.jpeg",
            }}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.pic}>
          <Image
            style={styles.images}
            source={{
              uri: "https://images.pexels.com/photos/14950664/pexels-photo-14950664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AlbumPIc;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#fff",
  },
  pic: {
    padding: 5,
  },
  images: {
    width: 170,
    height: 180,
  },
});
