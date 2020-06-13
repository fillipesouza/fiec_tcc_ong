import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import { combineReducers, createStore } from 'redux';
import userReducer from './src/store/UserReducer';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
  user: userReducer
})

const store = createStore(rootReducer);

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <Provider store={store} >
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
