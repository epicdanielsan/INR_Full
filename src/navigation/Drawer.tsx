import { createDrawerNavigator } from "@react-navigation/drawer";
import { Image, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { constant } from "../constants/constants";
import CustomDrawer from "./CustomDrawer";
import { ScreensArray } from "./ScreensArray";

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
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
        headerRight: () => (
          <Image
            source={require("../../assets/icon.png")}
            style={{ width: 40, height: 40, marginRight: 10 }}
          />
        ),
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

export default DrawerNav;

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
});
