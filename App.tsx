import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import "react-native-gesture-handler";

import * as Notifications from "expo-notifications";
import {
  AuthContext,
  AuthProvider,
} from "./src/contexts/AuthenticationContext";
import LoggedInNavigator from "./src/navigation/LoggedInNavigator";
import LoggedOutNavigator from "./src/navigation/LoggedOutNavigator";

const AppNavigator = () => {
  const authContext = useContext(AuthContext);

  return (
    <NavigationContainer>
      {authContext.isLoggedIn ? <LoggedInNavigator /> : <LoggedOutNavigator />}
    </NavigationContainer>
  );
};

//Setup das notificações do app
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const App = () => {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
};

export default App;
