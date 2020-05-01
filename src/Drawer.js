import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Center } from "./components/Center";
import { BottomTabsHome } from "./Tabs";
import { AuthContext } from "./providers/AuthProvider";
import { ProfileStack } from "./stack/ProfileStack";
import { NotificationsStack } from "./stack/NotificationsStack";
import { BookmarkStack } from "./stack/BookmarkStack";

function CustomDrawerContent(props) {
  const { logout } = useContext(AuthContext);
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Logout" onPress={() => logout()} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={BottomTabsHome} />
      <Drawer.Screen name="Profile" component={ProfileStack} />
      <Drawer.Screen name="Notifications" component={NotificationsStack} />
      <Drawer.Screen name="Bookmarks" component={BookmarkStack} />
    </Drawer.Navigator>
  );
};
