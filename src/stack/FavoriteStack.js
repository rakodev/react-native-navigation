import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Text, TouchableOpacity, Button } from "react-native";
import FavoritesScreen from "../screen/FavoritesScreen";

const Stack = createStackNavigator();

export const FavoritesStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="MyEvents"
        component={FavoritesScreen}
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
    </Stack.Navigator>
  );
};
