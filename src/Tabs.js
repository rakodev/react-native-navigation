import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { FeedStack } from "./stack/FeedStack";
import { MyEventsStack } from "./stack/MyEventsStack";
import { FavoritesStack } from "./stack/FavoriteStack";

const Tabs = createBottomTabNavigator();

export const BottomTabsHome = ({ navigation }) => {
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
      <Tabs.Screen
        name="Home"
        component={FeedStack}
        options={{
          title: ""
        }}
      />
      <Tabs.Screen
        name="MyEventList"
        component={MyEventsStack}
        options={{
          title: ""
        }}
      />
      <Tabs.Screen
        name="Favorite"
        component={FavoritesStack}
        options={{
          title: ""
        }}
      />
    </Tabs.Navigator>
  );
};
