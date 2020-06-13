import React, { Component } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Linking,
  Button,
} from "react-native";
import { Link } from "@react-navigation/native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Button
        style={styles.face}
        title="Venha conhecer nossa página do facebook!"
        onPress={() =>
          Linking.openURL("https://www.facebook.com/bolha.d.sabao/")
        }
      />
      <Text style={styles.text}>Carousel</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FAAC58",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "#00BFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  face: {
    width: 100,
    height: 10,
    backgroundColor: "#00BFFF",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
});
