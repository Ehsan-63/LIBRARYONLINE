import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontAwesome5, Ionicons, EvilIcons } from "@expo/vector-icons";
import React from "react";

const Footer = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <FontAwesome5 name="user" size={24} color="black" />
        <Text>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="library-outline" size={24} color="black" />
        <Text>Library</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <EvilIcons name="search" size={33} color="black" />
        <Text>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome5 name="list-alt" size={24} color="black" />
        <Text>Menu</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="md-home-outline" size={24} color="black" />
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    minHeight: 50,
    width: "100%",
    backgroundColor: "white",
    justifyContent: "space-between",
    
  },
});
