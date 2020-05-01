import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect, useContext } from "react";
import { ActivityIndicator, AsyncStorage } from "react-native";
import { Center } from "./components/Center";
import { AuthContext } from "./providers/AuthProvider";
import { BottomTabs } from "./Tabs";
import { AuthStack } from "./stack/AuthStack";
import { DrawerNavigator } from "./Drawer";

export const Routes = () => {
  const { user, login } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // check if the user is logged in or not
    AsyncStorage.getItem("user")
      .then(userString => {
        if (userString) {
          login();
        }
        setLoading(false);
        console.log(userString);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Center>
        <ActivityIndicator size="large" />
      </Center>
    );
  }
  return (
    <NavigationContainer>
      {user ? <DrawerNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
};
