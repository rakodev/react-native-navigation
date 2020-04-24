import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext } from "react";
import { Text, TouchableOpacity } from "react-native";
import { Center } from "./../components/Center";
import { AuthContext } from "../providers/AuthProvider";

const Stack = createStackNavigator();

function Feed() {
  return (
    <Center>
      <Text>Feed</Text>
    </Center>
  );
}

export const HomeStack = () => {
  const { logout } = useContext(AuthContext);
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{
          headerTitle: null,
          headerRight: () => {
            return (
              <TouchableOpacity onPress={() => logout()}>
                <Text>Logout</Text>
              </TouchableOpacity>
            );
          }
        }}
      />
    </Stack.Navigator>
  );
};
