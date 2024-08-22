import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StyleSheet } from "react-native";
import Styles from "./src/common/Styles";
import DrawerNav from "./src/navigation/Drawer";

export default function App() {
  return (
    <SafeAreaView style={Styles.container}>
      <NavigationContainer>
        <DrawerNav />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
