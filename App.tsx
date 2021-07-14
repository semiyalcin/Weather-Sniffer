import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BottomTabs from "./components/BottomTabs";
export default function App() {
  return (
    <>
      <BottomTabs />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  temp: {
    fontSize: 150,
    color: "white",
  },
  weather: {
    alignSelf: "flex-end",
    transform: [{ rotate: "-90deg" }],
    fontSize: 25,
    marginTop: -170,
    fontWeight: "bold",
    color: "white",
  },
  extraStatsContainer: {
    backgroundColor: "#FDB833",
    opacity: 1,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 405,
    borderWidth: 0.6,
  },
  extraStats: {
    fontSize: 25,
    textAlign: "center",
    color: "white",
  },
  extraTitles: {
    textAlign: "center",
    fontSize: 13,
    color: "white",
  },
  eachStats: {
    padding: 15,
  },
  border: {
    borderWidth: 0.6,
    borderColor: "#fff",
    height: 20,
    marginTop: 25,
  },
  inputContainer: {
    flexDirection: "row",
  },
  input: {
    borderWidth: 1,
    padding: 8,
    margin: 10,
    borderColor: "white",
    borderRadius: 15,
    width: 250,
    color: "white",
  },
  button: {
    backgroundColor: "#FFD07B",
    padding: 8,
    margin: 10,
    borderRadius: 20,
    width: 55,
    alignSelf: "center",
  },
  searchButton: {
    color: "#296EB4",
  },
});
