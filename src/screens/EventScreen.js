import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
class App extends React.Component {
  state = {
    data: [
      { id: "00", name: "Doações" },
      { id: "01", name: "Eventos" },
      { id: "02", name: "ONGS" },
      { id: "03", name: "Crianças" },
    ],
  };
  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={this.state.data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View style={styles.item}>
                <Text style={styles.text}>{item.name}</Text>
              </View>
            );
          }}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  item: {
    alignItems: "center",
    backgroundColor: "#dcda48",
    flexGrow: 1,
    margin: 4,
    padding: 20,
  },
  text: {
    color: "#333333",
  },
});
export default App;
