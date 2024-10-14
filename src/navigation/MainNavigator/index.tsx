import { createDrawerNavigator } from "@react-navigation/drawer";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import Colors from "../../constants/Colors";
import { constant } from "../../constants/constants";
import { AuthContext } from "../../contexts/AuthenticationContext";
import CustomDrawer from "./CustomDrawer";
import { ScreensArray } from "./ScreensArray";

const Drawer = createDrawerNavigator();

const MainNavigator = () => {
  const authContext = useContext(AuthContext);
  const navigation = useNavigation();
  return (
    <Drawer.Navigator
      backBehavior="history"
      screenOptions={{
        drawerType: "slide",
        overlayColor: "transparent",
        drawerStyle: styles.drawerStyle,
        drawerActiveBackgroundColor: Colors.primary.dark,
        drawerItemStyle: styles.drawerItemStyles,
        drawerActiveTintColor: Colors.primary.light,
        drawerLabelStyle: styles.drawerLabelStyles,
        headerStyle: {
          backgroundColor: Colors.primary.background,
        },
        headerRight: () => {
          if (authContext.isLoggedIn) {
            return (
              <Image
                source={require("../../../assets/icon.png")}
                style={{ width: 40, height: 40, marginRight: 10 }}
              />
            );
          } else {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("LogIn" as never);
                }}
              >
                <Text style={styles.loginButton}>Entrar</Text>
              </TouchableOpacity>
            );
          }
        },
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      {ScreensArray.map((item, index) => {
        return (
          <Drawer.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              drawerItemStyle: { display: "none" },
            }}
          />
        );
      })}
    </Drawer.Navigator>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({
  drawerStyle: {
    width: 300,
    backgroundColor: Colors.primary.background,
  },
  drawerItemStyles: {
    borderRadius: constant.borderRadius,
  },
  drawerLabelStyles: {
    fontSize: constant.drawer.textFontSize,
    // marginHorizontal: -constant.SPACING,
  },
  loginButton: {
    color: Colors.primary.dark,
    fontWeight: "500",
    marginHorizontal: 20,
    fontSize: 17,
  },
});
