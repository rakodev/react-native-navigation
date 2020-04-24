import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext } from "react";
import { Button, Text } from "react-native";
import { Center } from "./../components/Center";
import { AuthContext } from "./../providers/AuthProvider";

const Stack = createStackNavigator();

function Login({ navigation }) {
  const { login } = useContext(AuthContext);
  return (
    <Center>
      <Text>Login Screen</Text>
      <Button
        title="Sign in"
        onPress={() => {
          login();
        }}
      />
      <Button
        title="Go to Register"
        onPress={() => {
          navigation.navigate("Register");
        }}
      />
    </Center>
  );
}

function Register({ navigation }) {
  return (
    <Center>
      <Text>Register Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
    </Center>
  );
}

export const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerTitle: "Sign in" }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerTitle: "Sign up" }}
      />
    </Stack.Navigator>
  );
};
