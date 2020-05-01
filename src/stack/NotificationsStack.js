import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Center } from "./../components/Center";

const Stack = createStackNavigator();

function Notifications({ navigation }) {
  return (
    <Center>
      <Text>Notifications</Text>
    </Center>
  );
}

export const NotificationsStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Notifications">
      <Stack.Screen
        name="Notifications"
        component={Notifications}
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
