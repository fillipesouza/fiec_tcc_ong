import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import ReduxThunk from 'redux-thunk';
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import EventScreen from "./src/screens/EventScreen";
import OngScreen from "./src/screens/OngScreen";
import { combineReducers, createStore, applyMiddleware } from 'redux';
import userReducer from './src/store/UserReducer';
import ongsReducer from './src/store/ongs_reducer';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
  user: userReducer,
  ongs: ongsReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();



import { createDrawerNavigator } from "@react-navigation/drawer";
import ongs_reducer from "./src/store/ongs_reducer";
import OngSubscribe from "./src/screens/OngSubscribeScreen";
import OngSubscribeScreen from "./src/screens/OngSubscribeScreen";

const Drawer = createDrawerNavigator();

const HomeLoginStack = props =>  <Stack.Navigator>
  <Stack.Screen name="Login" component={LoginScreen} />
  <Stack.Screen name="Home" component={HomeScreen} />
</Stack.Navigator>;

const EventosStack = props => <Stack.Navigator>
  <Stack.Screen name="Eventos" component={EventScreen} />
</Stack.Navigator>;

const OngStack = props =>  <Stack.Navigator>
  <Stack.Screen name="Ongs" component={OngScreen} />
  <Stack.Screen name="OngSubscribe" component={OngSubscribeScreen} />
</Stack.Navigator>;

const TabsNavigator = props => <Tab.Navigator>
  <Tab.Screen name="Home" component={HomeLoginStack} />
  <Tab.Screen name="Eventos" component={EventosStack} />
  <Tab.Screen name="Ongs" component={OngStack} />
</Tab.Navigator>;

const App = () => {
  return (
    <Provider store={store} >
      <NavigationContainer>
       <TabsNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
