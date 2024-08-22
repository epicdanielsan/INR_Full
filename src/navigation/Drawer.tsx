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
      screenOptions={{
        drawerType: "slide",
        overlayColor: "transparent",
        drawerStyle: styles.drawerStyle,
        drawerActiveBackgroundColor: Colors.primary.dark,
        drawerItemStyle: styles.drawerItemStyles,
        drawerActiveTintColor: Colors.primary.light,
        drawerLabelStyle: styles.drawerLabelStyles,
        headerRight: () => (
          <Image
            source={require("../../assets/images/Logo.jpg")}
            style={{ width: 150, height: 50 }}
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
  },
  drawerItemStyles: {
    borderRadius: constant.borderRadius,
  },
  drawerLabelStyles: {
    fontSize: constant.drawer.textFontSize,
    // marginHorizontal: -constant.SPACING,
  },
});
