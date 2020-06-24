import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import EventScreen from "../screens/EventScreen";
import OngScreen from "../screens/OngScreen";
import { useSelector, useDispatch } from "react-redux";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import { createDrawerNavigator } from "@react-navigation/drawer";
import OngSubscribeScreen from "../screens/OngSubscribeScreen";

const Drawer = createDrawerNavigator();

const HomeLoginStack = (props) => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
);

const EventosStack = (props) => (
  <Stack.Navigator>
    <Stack.Screen name="Eventos" component={EventScreen} />
  </Stack.Navigator>
);

const OngStack = (props) => (
  <Stack.Navigator>
    <Stack.Screen name="Ongs" component={OngScreen} />
    <Stack.Screen name="OngSubscribe" component={OngSubscribeScreen} />
  </Stack.Navigator>
);

const TabsNavigator = (props) => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeLoginStack} />
    <Tab.Screen name="Eventos" component={EventosStack} />
    <Tab.Screen name="Ongs" component={OngStack} />
  </Tab.Navigator>
);

const Main = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!token ? (
          <Stack.Screen name="Entrar" component={LoginScreen} />
        ) : (
          <Stack.Screen name="Home" component={TabsNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;

const styles = StyleSheet.create({});
