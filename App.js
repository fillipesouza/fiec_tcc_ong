import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ReduxThunk from "redux-thunk";
import { combineReducers, createStore, applyMiddleware } from "redux";
import userReducer from "./src/store/UserReducer";
import ongsReducer from "./src/store/ongs_reducer";
import { Provider, useSelector, useDispatch } from "react-redux";
import Main from "./src/navigator/navigation";

const rootReducer = combineReducers({
  user: userReducer,
  ongs: ongsReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
