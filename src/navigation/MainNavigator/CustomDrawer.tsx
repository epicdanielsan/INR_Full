import AsyncStorage from "@react-native-async-storage/async-storage";
import { DrawerItemList } from "@react-navigation/drawer";
import {
  DrawerDescriptorMap,
  DrawerNavigationHelpers,
} from "@react-navigation/drawer/lib/typescript/src/types";
import {
  DrawerNavigationState,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { useContext, useState } from "react";
import {
  LayoutAnimation,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import Styles from "../../common/Styles";
import CustomIcon from "../../components/Icons";
import { Row } from "../../components/Row";
import Colors from "../../constants/Colors";
import { constant } from "../../constants/constants";
import { AuthContext } from "../../contexts/AuthenticationContext";
import { asyncUser } from "../../lib/types";
import { drawerMenu } from "./DrawerMenu";

type Props = {
  state: DrawerNavigationState<ParamListBase>;
  navigation: DrawerNavigationHelpers;
  descriptors: DrawerDescriptorMap;
};

const CustomDrawer = (props: Props) => {
  const navigation = useNavigation();
  const authContext = useContext(AuthContext);
  const [menuIndex, setMenuIndex] = useState<number>(-1);

  const clearUserToken = async () => {
    console.log("Daniel");

    const jsonValue = await AsyncStorage.getItem("user");
    const parsedValue: asyncUser =
      jsonValue != null ? JSON.parse(jsonValue) : null;
    parsedValue.userToken = "";

    //Fazer logout no contexto
    authContext.logout();
    await AsyncStorage.setItem("user", JSON.stringify(parsedValue));
    navigation.navigate("Início" as never);
  };

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 50 }}>
      <ScrollView>
        <DrawerItemList {...props} />
        {drawerMenu.map((item, index) => {
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              key={index}
              style={[styles.menu]}
              onPress={() => {
                LayoutAnimation.configureNext(
                  LayoutAnimation.Presets.easeInEaseOut
                );
                setMenuIndex(menuIndex === index ? -1 : index);
                if (item.action && item.action === "Sair") {
                  clearUserToken();
                }
                if (item.action && item.action === "Entrar") {
                  if (authContext.isLoggedIn) return;
                }
                if (item.route) {
                  navigation.navigate(item.route as never);
                }
              }}
            >
              <Row style={styles.item}>
                <CustomIcon
                  name={item.icon}
                  iconName={item.iconName}
                  size={30}
                  color={Colors.primary.dark}
                />
                <Text
                  style={[
                    styles.text,
                    {
                      color:
                        menuIndex === index
                          ? Colors.primary.light
                          : Colors.primary.dark,
                    },
                  ]}
                >
                  {item.title}
                </Text>
              </Row>
              {menuIndex === index && (
                <View
                  style={{
                    borderRadius: constant.borderRadius,
                  }}
                >
                  {item.menuList &&
                    item.menuList.map((subMenu, index) => (
                      <TouchableNativeFeedback
                        key={index}
                        onPress={() => {
                          if (subMenu.component) {
                            navigation.navigate(subMenu.route as never);
                          } else if (subMenu.route) {
                            return;
                            // navigation.navigate(subMenu.route as never); // Navigate using route
                          }
                        }}
                      >
                        <View style={styles.subMenu}>
                          <Text
                            style={{
                              color: Colors.primary.dark,
                              left: 5,
                              fontSize: 16,
                              marginVertical: 2,
                              fontWeight: "400",
                            }}
                          >
                            {subMenu.title}
                          </Text>
                        </View>
                      </TouchableNativeFeedback>
                    ))}
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  textContainer: {
    paddingHorizontal: constant.SPACING,
  },

  header: {
    padding: constant.SPACING,
    ...Styles.rowView,
    borderBottomWidth: 1,
    borderBottomColor: Colors.drawer.light,
  },
  name: {
    fontSize: constant.titleFontSize,
  },
  menu: {
    marginHorizontal: constant.SPACING / 1.7,
    marginVertical: constant.SPACING / 2.5,
    borderRadius: constant.borderRadius,
  },
  item: {
    paddingHorizontal: constant.SPACING / 1.5,
    paddingVertical: constant.SPACING / 1.2,
  },
  text: {
    fontSize: constant.textFontSize,
    paddingHorizontal: constant.SPACING,
    fontWeight: "500",
  },
  subMenu: {
    paddingHorizontal: constant.SPACING,
    paddingVertical: constant.SPACING / 1.5,
  },
  spacer: {
    marginVertical: constant.SPACING,
    width: "90%",
    height: 1,
    backgroundColor: Colors.drawer.light,
    alignSelf: "center",
  },
});
