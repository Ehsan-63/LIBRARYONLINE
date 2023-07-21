import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Post from "./Comments";

const BookDetails = ({ route }) => {
  const navigation = useNavigation();
  const { book } = route.params;

  const handleBookDetail = () => {
    // Logic to handle
    navigation.navigate("HomeScreen");
  };
  return (
    <View style={styles.container}>
      <Image source={{ uri: book.image }} style={styles.bookImage} />
      <Text style={styles.textstyle}>{book.name}</Text>
      <Text style={styles.textstyle}>{book.price}</Text>
      <Text style={styles.textstyle}>{book.description}</Text>
      <Post />
      {/* <TouchableOpacity
        style={{
          backgroundColor: "blue",
          padding: 10,
          borderRadius: 10,
          alignItems: "center",
          marginTop: 3,
          width: "80%",
        }}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.ButtonText}>GoHome</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default BookDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    marginTop: 30,
    marginBottom: 20,
    alignItems: "center",
  },
  bookImage: {
    borderWidth: 1,
    borderColor: "black",
    width: 150,
    height: 225,
    borderColor: "black",
    borderRadius: 5,
    marginBottom: 10,
  },
  textstyle: {
    color: "black",
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  ButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
