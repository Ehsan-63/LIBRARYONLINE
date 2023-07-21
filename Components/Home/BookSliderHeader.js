import React, { useState, useRef, useEffect } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import BooksHeader from "./../../data/BooksHeader";

const BookSliderHeader = () => {
  const scrollViewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const bookWidth = 400;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex) =>
        currentIndex === BooksHeader.length - 1 ? 0 : currentIndex + 1
      );
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({
          x: currentIndex * bookWidth,
          y: 0,
          animated: true,
        });
      }
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        ref={scrollViewRef}
        contentContainerStyle={{ paddingRight: 10 }}
      >
        {BooksHeader.map((book, index) => (
          <View key={index}>
            <TouchableOpacity>
              <Image source={{ uri: book.image }} style={styles.bookImage} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  //  marginVertical:1
  },
  bookImage: {
    width: 385,
    height: 140,
    marginLeft: 7,
    marginRight: 5,
    borderRadius: 3,
  },
});

export default BookSliderHeader;
