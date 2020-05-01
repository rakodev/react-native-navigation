import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext } from "react";
import { Text, TouchableOpacity, Button } from "react-native";
import FeedScreen from "../screen/FeedScreen";
import EventDetailScreen from "../screen/EventDetailScreen";

const Stack = createStackNavigator();

export const FeedStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          headerTitle: null,
          headerLeft: () => {
            return (
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Text>Menu</Text>
              </TouchableOpacity>
            );
          }
        }}
      />
      <Stack.Screen name="Detail" component={EventDetailScreen} />
    </Stack.Navigator>
  );
};
