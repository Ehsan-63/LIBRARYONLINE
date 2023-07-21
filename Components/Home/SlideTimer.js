import React, { useState, useRef, useEffect } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import BooksHeader from "./../../data/BooksHeader";

const SlideTimer = () => {
  const scrollViewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const bookWidth = Dimensions.get("window").width + 30; // Adjust the width based on the device screen

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
    }, 4500);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        ref={scrollViewRef}
        contentContainerStyle={styles.scrollViewContent}
        centerContent={true}
      >
        {BooksHeader.map((book, index) => (
          <View key={index}>
            <Image source={{ uri: book.image }} style={styles.bookImage} />
            <View
              style={{
                flex: 1,
                backgroundColor: "lightgray",
                width: 379,
                height: 150,
                marginBottom: 50,
                elevation: 5,
                shadowColor: "black",
                borderBottomRightRadius: 4,
                borderBottomLeftRadius: 4,
              }}
            >
              <TouchableOpacity>
                <Text
                  style={{
                    textAlign: "center",
                    marginTop: 50,
                    marginRight: 100,
                    color:"blue"
                  }}
                >
                  for more info click here
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
    marginHorizontal: 10,
  },
  scrollViewContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  bookImage: {
    width: 379,
    height: 140,
    marginHorizontal: 1,
  },
});

export default SlideTimer;
