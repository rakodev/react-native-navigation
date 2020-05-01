import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Center } from "./../components/Center";

const Stack = createStackNavigator();

function Bookmark({ navigation }) {
  return (
    <Center>
      <Text>Bookmark</Text>
    </Center>
  );
}

export const BookmarkStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Bookmark">
      <Stack.Screen
        name="Bookmark"
        component={Bookmark}
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
