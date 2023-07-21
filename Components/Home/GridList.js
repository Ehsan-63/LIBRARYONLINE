import * as React from "react";
import { Image, FlatList, Dimensions } from "react-native";

const picsumImages = new Array(11).fill("http://placeimg.com/640/360/any");

const numColumns = 4;

function renderItem({ item }) {
  return (
    <Image
      source={{ uri: item }}
      style={{ aspectRatio: 1, flex: 1 / numColumns }}
    />
  );
}

export default function GridList() {
  const [images, setImages] = React.useState(picsumImages);
  return (
      <FlatList 
      data={images} 
      renderItem={renderItem} 
      numColumns={4} />
  );
}