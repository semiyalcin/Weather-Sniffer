import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import Settings from "./Settings";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ title: "Settings" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
