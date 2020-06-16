import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Location, Permissions } from "expo";

export default class App extends React.Component {
  state = {
    location: {},
    errorMessage: "",
  };

  componentWillMount() {
    this._getLocation();
  }

  _getLocation = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);

    if (status !== "granted") {
      console.log("Permission not granted!");

      this.setState({
        errorMessage: "Permission NOT GRANTED",
      });
    }

    const userLocation = await Location.getCurrentPositionAsync();

    this.setState({
      location,
    });
  };

  render() {
    return (
      <view style={styles.container}>
        <text>{JSON.stringify(this.state.location)}</text>
      </view>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
