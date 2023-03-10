import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { Logo } from "../assets/Svg";
import BgImage from "../assets/Svg/BgImage";

const { width, height } = Dimensions.get("window");

const Home = () => {
  return (
    <View
      style={{
        display: "flex",
        position: "absolute",
        height: "100%",
        width: "100%",
      }}
    >
      <ImageBackground
        source={require("../assets/Png/BgImage.png")}
        resizeMode="cover"
        style={styles.image}
      ></ImageBackground>
      <View
        style={{
          width: width,
          height: height,
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Logo />
        <ActivityIndicator size={"large"} color="#42C83C" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
  },
});

export default Home;
