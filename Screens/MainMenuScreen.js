import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import React from "react";

const MainMenu = () => {
  const data = [
    {
      id: "1",
      name: (
        <Text style={{ color: "#bbb999" }}>
          <Ionicons name="md-headset-outline" size={24} color="#bbb999" /> Audio
          Books
        </Text>
      ),
    },
    {
      id: "2",
      name: (
        <Text style={{ color: "#bbb999" }}>
          <FontAwesome5 name="book-reader" size={24} color="#bbb999" /> Free
          Books
        </Text>
      ),
    },
    {
      id: "3",
      name: (
       <View>
         <Text>
          <Image
            style={{ width: 30, height: 30 }}
            source={require("./../assets/poetry.png")}
          />{" "}
          Writing
        </Text>
       </View>
      ),
    },
    { id: "4", name: "Item 4" },
    { id: "5", name: "Item 5" },
    { id: "6", name: "Item 1" },
    { id: "7", name: "Item 2" },
    { id: "8", name: "Item 3" },
    { id: "9", name: "Item 4" },
    { id: "10", name: "Item 5" },
    { id: "11", name: "Item 1" },
    { id: "12", name: "Item 2" },
    { id: "13", name: "Item 3" },
    { id: "14", name: "Item 4" },
    { id: "15", name: "Item 5" },
    { id: "16", name: "Item 1" },
    { id: "17", name: "Item 2" },
    { id: "18", name: "Item 3" },
    { id: "19", name: "Item 4" },
    { id: "20", name: "Item 5" },
    { id: "21", name: "Item 1" },
    { id: "22", name: "Item 2" },
    { id: "23", name: "Item 3" },
    { id: "24", name: "Item 4" },
    { id: "25", name: "Item 5" },
    { id: "26", name: "Item 1" },
    { id: "27", name: "Item 2" },
    { id: "28", name: "Item 3" },
    { id: "29", name: "Item 4" },
    { id: "30", name: "Item 5" },
  ];
  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          padding: 10,
          borderBottomColor: "lightgray",
          borderBottomWidth: 0.5,
          margin: 15,
        }}
      >
        <TouchableOpacity>
          <Text style={{ color: "black", marginBottom: 25 }}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default MainMenu;

const styles = StyleSheet.create({});
