import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const CustomButton = (props) => {
  const { title, width, height, color, borderRadius, bgColor } = props;
  return (
    <TouchableOpacity>
      <View style={styles(width, height, color, borderRadius, bgColor).Button}>
        <Text
          style={{
            color: color,
            textAlign: "center",
            fontSize: width / 10,
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = (width, height, color, borderRadius, bgColor) =>
  StyleSheet.create({
    Button: {
      width: width,
      height: height,
      color: color,
      borderRadius: borderRadius,
      backgroundColor: bgColor,
      alignItems: "center",
      justifyContent: "center",
      margin: 20,
      padding: 5,
    },
  });

export default CustomButton;
