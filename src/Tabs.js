import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Center } from "./components/Center";
import { Text, Button } from "react-native";
import { AuthContext } from "./providers/AuthProvider";
import Ionicons from "react-native-vector-icons/Ionicons";
import { HomeStack } from "./stack/HomeStack";

const Tabs = createBottomTabNavigator();

function MyEventList() {
  return (
    <Center>
      <Text>My Event List</Text>
    </Center>
  );
}

function Favorite() {
  return (
    <Center>
      <Text>My Favorite List</Text>
    </Center>
  );
}

export const BottomTabs = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "md-home" : "ios-home";
          } else if (route.name === "MyEventList") {
            iconName = focused ? "md-list" : "md-list-box";
          } else if (route.name === "Favorite") {
            iconName = focused ? "md-heart" : "md-heart-empty";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        }
      })}
      tabBarOptions={{
        activeTintColor: "dodgerblue",
        inactiveTintColor: "gray"
      }}
    >
      <Tabs.Screen name="Home" component={HomeStack} />
      <Tabs.Screen name="MyEventList" component={MyEventList} />
      <Tabs.Screen name="Favorite" component={Favorite} />
    </Tabs.Navigator>
  );
};
