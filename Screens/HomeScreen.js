import { ScrollView, StyleSheet, StatusBar, View } from "react-native";
import HorizontalMenu from "../Components/Home/HorizontalMenu";
import Banner1 from "../Components/Home/Banner1";
import Banner2 from "../Components/Home/Banner2";
import Header from "./../Components/Home/Header";
import React, { useEffect } from "react";
import BannerAndTwoPic from "../Components/Home/BannerAndTwoPic";
import AlbumPIc from '../Components/Home/AlbumPIc';
import BigBanner from "./../Components/Home/BigBanner";
import BookSliderHeader from "../Components/Home/BookSliderHeader";
import SmallBanner from "../Components/Home/SmallBanner";
// import GridList from './../Components/Home/GridList';
import SlideTimer from "../Components/Home/SlideTimer";
import PicAndBanner from "../Components/Home/PicAndBanner";
const HomeScreen = () => {
  useEffect(() => {
    StatusBar.setHidden(true);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <HorizontalMenu />
        <BannerAndTwoPic />
        <SmallBanner />
        <Banner1 />
        <AlbumPIc />
        <BookSliderHeader />
        <BigBanner />
        <Banner2 />
        <PicAndBanner />
        <SlideTimer/>
        {/* <GridList /> */}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
  }
});
