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
      <Text style={styles.title} >{ong.title} </Text>
      <Image style={styles.image} source={{ uri: ong.imageUrl }} />
      <Text style={styles.texto}>Saiba mais!</Text>
      <Button
        title="Clique aqui!"
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
  texto: {
    marginTop: 8,
    fontSize: 20,
    marginBottom: 24,
    color: "#737380",
  },
  title: {
    marginTop: 8,
    fontSize: 20,
    marginBottom: 24,
    color: "#737380",
  }

});
