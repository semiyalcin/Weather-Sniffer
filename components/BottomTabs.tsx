import React from "react";
import { View, Text } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "./Home";
import Settings from "./Settings";
import FavouritePlaces from "./FavouritePlaces";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        barStyle={{ backgroundColor: "#282c35" }}
        backBehavior="history"
        // labeled={false}
        activeColor="#fff"
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Favourite Places"
          component={FavouritePlaces}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="heart" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="cog" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabs;
