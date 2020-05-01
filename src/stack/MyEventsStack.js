import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Text, TouchableOpacity, Button } from "react-native";
import MyEventsScreen from "../screen/MyEventsScreen";

const Stack = createStackNavigator();

export const MyEventsStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="MyEvents"
        component={MyEventsScreen}
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
