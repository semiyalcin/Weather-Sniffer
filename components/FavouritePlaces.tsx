import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FavouritePlaces = () => {
  return (
    <View style={styles.container}>
      <Text>Fav Places</Text>
    </View>
  );
};

export default FavouritePlaces;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
