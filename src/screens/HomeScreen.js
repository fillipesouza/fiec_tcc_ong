import React, { Component } from "react";
import { Feather } from "@expo/vector-icons";
import Main from "../navigator/navigation";
import {
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Linking,
  Button,
  Image,
  ScrollView,
} from "react-native";
import { Link } from "@react-navigation/native";
import Constants from "expo-constants";

const HomeScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Feather name="align-justify" size={28} color="#9b51e0" />
          </TouchableOpacity>
          <Text style={styles.texto}>Home</Text>
        </View>
        <Image source={require("../../assets/cod.png")} style={styles.logo} />

        <View style={styles.firstContent}>
          <Text style={styles.texto}>"Conectando Ongs e doadores"</Text>
        </View>
        <View style={styles.firstContent}>
          <Text style={styles.texto}>"CONECTANDO ONGS E DOADORES"</Text>
        </View>
        <Button
          style={styles.botao1}
          title="Facebook!"
          onPress={() =>
            Linking.openURL("https://www.facebook.com/AplicativoCod/")
          }
        />
        <Button
          style={styles.botao2}
          title="Instagram!"
          onPress={() =>
            Linking.openURL(
              "https://instagram.com/conectando.ongs.e.doadores?igshid=ryaqyqiadzvc"
            )
          }
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: Constants.statusBarHeight + 0,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    width: 250,
    height: 250,
  },

  firstContent: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#FFF",
    marginBottom: 16,
  },

  contentcon: {
    fontSize: 14,
    color: "#41414d",
    fontWeight: "bold",
  },

  texto: {
    marginTop: 8,
    fontSize: 20,
    marginBottom: 24,
    color: "#737380",
  },

  botao1: {
    color: "#737380",
  },

  botao2: {
    color: "purple",
  },
});
