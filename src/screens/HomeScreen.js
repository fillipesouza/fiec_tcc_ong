import React, { Component } from "react";
import { Feather } from '@expo/vector-icons'
import Main from '../navigator/navigation'
import {
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Linking,
  Button,
  Image,
} from "react-native";
import { Link } from "@react-navigation/native";
import Constants from 'expo-constants';




const HomeScreen = () => {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
      <TouchableOpacity>
      <Feather name="align-justify" size={28} color="#9b51e0" />
      </TouchableOpacity>
      <Text style={styles.texto}>Home</Text>
      </View>
      <Image source={require("../../assets/cod.png")} style={styles.logo} />

      <View style={styles.firstContent}><Text style={styles.texto}>ESCREVA O NOSSO PROPÓSITO</Text></View>
      <View style={styles.firstContent}><Text style={styles.texto}>ESCREVA ALGO EMOCIONANTE E INSPIRADOR</Text></View>

    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  logo: {
    width: 250,
    height: 250,
  }, 

  firstContent: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
  },  

contentcon: {
  fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold'
},

  texto: {
    marginTop: 8,
    fontSize: 22,
    marginBottom: 24,
    color: '#737380'
  },
});
