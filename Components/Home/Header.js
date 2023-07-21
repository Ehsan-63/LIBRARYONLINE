import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Entypo
          style={{ marginLeft: 15 }}
          name="share"
          size={24}
          color="green"
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
          style={{ width: 150, height: 50 }}
          source={require("../../assets/logo.png")}
        />
      </TouchableOpacity>
      
      <TouchableOpacity>
        <AntDesign
          style={{ marginRight: 15 }}
          name="questioncircleo"
          size={24}
          color="green"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "white",
    flexDirection: "row",
    width: "100%",
    minHeight: 65,
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor:'lightgray',
    borderBottomWidth:2.6
    
  },
  
});

