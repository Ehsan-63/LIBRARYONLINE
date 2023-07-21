import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import HorizontalMenu from "../../data/horizontalMenu";
import React from "react";

const Menu = () => {
  return (
    <View style={{ marginVertical: 7, backgroundColor: "transparent" }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {HorizontalMenu.map((menu, index) => (
          <View key={index} style={styles.view}>
            <TouchableOpacity>
              <Text style={styles.textItem}>{menu.item}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    borderColor: "gray",
    marginLeft: 7,
    borderWidth:.5,
  },
  textItem: {
    color: "green",
    padding: 5,
  },
});
