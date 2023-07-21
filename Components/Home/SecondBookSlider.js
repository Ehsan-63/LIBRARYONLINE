import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import Books from "../../data/books";
import React from "react";
import { useNavigation } from '@react-navigation/native';

const SecondBookSlider = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingEnd:200}}
      >
        {Books.map((book, index) => (
          <View key={index}>
            <TouchableOpacity onPress={() => navigation.navigate('BookDetails', { book })}>
              <Image source={{ uri: book.image }} style={styles.bookImage} />
              <Text style={styles.textstyle}>{book.name}</Text>
              {/* <Text style={styles.textstyle}>{book.price}</Text> */}
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default SecondBookSlider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    marginTop: 30,
    marginBottom:20,
    paddingRight:120,
   

  },
  bookImage: {
    borderWidth: 1,
    borderColor: "black",
    width: 100,
    height: 150,
    marginLeft: 10,
    marginBottom: 6,
    // borderRadius: 5,
  },
  textstyle: {
    color: "black",
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  // contentContainerStyle: {
  //   paddingEnd: 200,
  
  // },
});
