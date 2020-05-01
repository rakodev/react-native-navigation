import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Center } from "./../components/Center";

const Stack = createStackNavigator();

function Profile({ navigation }) {
  return (
    <Center>
      <Text>Profile</Text>
    </Center>
  );
}

export const ProfileStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitle: null,
          headerLeft: () => {
            return (
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Text>Menu</Text>
              </TouchableOpacity>
            );
          },
          headerRight: () => {
            return (
              <TouchableOpacity onPress={() => null}>
                <Text>Edit</Text>
              </TouchableOpacity>
            );
          }
        }}
      />
    </Stack.Navigator>
  );
};
