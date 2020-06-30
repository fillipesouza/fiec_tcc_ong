import React, { Component } from "react";
import { Feather } from "@expo/vector-icons";
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
import { useNavigation } from '@react-navigation/native';
import {useSelector} from "react-redux";

const HomeScreen = () => {
const email = useSelector(state => state.user.email)
const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>

        <TouchableOpacity onPress={() => {navigation.openDrawer(); }}>
        <Feather name="align-justify" size={28} color="#9b51e0" />
      </TouchableOpacity>

          <Text style={styles.texto}>Home</Text>
        </View>
        <Image source={require("../../assets/cod.png")} style={styles.logo} />

        <View style={styles.firstContent}>
          <Text style={styles.textouser}> Logado como: {email} </Text>
        </View>

        <View style={styles.firstContent}>
            <Text style={styles.help}>Sua ajuda é nossa força!</Text>
        </View>
        
        
        <View style={styles.rodape}>
          <TouchableOpacity
          style={styles.linkar}
          onPress={() =>
            Linking.openURL("https://www.facebook.com/AplicativoCod/")
          }
          >
        <Feather name="facebook" size={28} color="#9b51e0" style={styles.icon} />
         </TouchableOpacity>



        <TouchableOpacity
          style={styles.linkar2}
          title="Instagram!"
          onPress={() =>
            Linking.openURL(
              "https://instagram.com/conectando.ongs.e.doadores?igshid=ryaqyqiadzvc"
            )
          }
        >
        <Feather name="instagram" size={28} color="#9b51e0" style={styles.icon} />
        
        </TouchableOpacity>
        </View>

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
    color: "#9b51e0"
  },

  linkar: {
    height: 40,
    width: 80,
    borderRadius: 10.
  },

  linkar2: {
    height: 40,
    borderRadius: 10,
    width: 80,
    

  },


  rodape: {
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    position: "relative",
    marginTop: 90,

  },

  icon: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 27,
    marginTop: 8,
  },

  mini: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#9b51e0",
    marginBottom: 16,
    height: 80,
  },

  texto2: {
    marginTop: 0,
    fontSize: 24,
    marginBottom: 24,
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 50
  },

  textouser: {
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 15,
  },

  help: {
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 28,
    color: "#9b51e0"
  }
});
