import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";
import React from "react";
import { Logo } from "../assets/Svg";
import CustomButton from "../components/CustomButton";

const { width, height } = Dimensions.get("window");
const Setup = () => {
  return (
    <View style={styles.setup}>
      <View style={styles.logo}>
        <Logo />
      </View>
      <View style={styles.textBox}>
        <Text style={styles.text1}>{"Enjoy listening to music"}</Text>
        <Text style={styles.text2}>
          {
            "Spotify is a proprietary Swedish audio streaming and media services provider "
          }
        </Text>
      </View>
      <View style={styles.BtnBox}>
        <CustomButton
          title={"Register"}
          width={width / 2}
          height={height / 10}
          bgColor={"#42C83C"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  setup: {
    flex: 1,
  },
  logo: {
    height: height / 3,
    alignItems: "center",
    justifyContent: "center",
  },
  textBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    fontSize: width / 12,
    fontWeight: "700",
  },
  text2: {
    color: "#797979",
    fontSize: width / 20,
    textAlign: "center",
    margin: 20,
    fontWeight: "400",
  },
  BtnBox: {},
});

export default Setup;
