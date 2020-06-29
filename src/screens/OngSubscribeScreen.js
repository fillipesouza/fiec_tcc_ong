import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  StyleSheet,
  Text,
  ScrollView,
  ActivityIndicator,
  View,
  FlatList,
  Button,
  Image,
  Linking,
  TouchableOpacity,
} from "react-native";

const OngSubscribeScreen = (props) => {
  const { ong } = props.route.params;
  return (
    <View style={styles.container}>
      <Text>{ong.title}</Text>
      <Image style={styles.image} source={{ uri: ong.imageUrl }} />
      <Text>Conheça nosso site!</Text>
      <Button
        title="Ver mais"
        color="#9b51e0"
        onPress={() =>
          Linking.openURL("https://rotaryclubindaiatuba.wordpress.com/")
        }
      />
    </View>
  );
};

export default OngSubscribeScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 300,
  },
});
