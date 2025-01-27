import { NavigationContainer } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import "react-native-gesture-handler";

import * as Notifications from "expo-notifications";
import {
  AuthContext,
  AuthProvider,
} from "./src/contexts/AuthenticationContext";
import MainNavigator from "./src/navigation/MainNavigator";

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

//Setup das notificações do app
// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: false,
//     shouldSetBadge: false,
//   }),
// });

const App = () => {
  const authContext = useContext(AuthContext);
  const [expoPushToken, setExpoPushToken] = useState<string>("");
  const [notification, setNotification] = useState<
    Notifications.Notification | undefined
  >(undefined);
  // const notificationListener = useRef<Notifications.Subscription>();
  // const responseListener = useRef<Notifications.Subscription>();

  // function handleRegistrationError(errorMessage: string) {
  //   alert(errorMessage);
  //   throw new Error(errorMessage);
  // }

  useEffect(() => {
    // registerForPushNotificationsAsync()
    //   .then((token) => setExpoPushToken(token ?? ""))
    //   .catch((error: any) => setExpoPushToken(`${error}`));
    // notificationListener.current =
    //   Notifications.addNotificationReceivedListener((notification) => {
    //     setNotification(notification);
    //   });
    // responseListener.current =
    //   Notifications.addNotificationResponseReceivedListener((response) => {
    //     console.log(response);
    //   });
    // return () => {
    //   notificationListener.current &&
    //     Notifications.removeNotificationSubscription(
    //       notificationListener.current
    //     );
    //   responseListener.current &&
    //     Notifications.removeNotificationSubscription(responseListener.current);
    // };
  }, []);

  // async function registerForPushNotificationsAsync() {
  //   if (Platform.OS === "android") {
  //     Notifications.setNotificationChannelAsync("default", {
  //       name: "default",
  //       importance: Notifications.AndroidImportance.MAX,
  //       vibrationPattern: [0, 250, 250, 250],
  //       lightColor: "#FF231F7C",
  //     });
  //   }

  //   if (Device.isDevice) {
  //     //Permissões de notificação
  //     const { status: existingStatus } =
  //       await Notifications.getPermissionsAsync();
  //     let finalStatus = existingStatus;
  //     if (existingStatus !== "granted") {
  //       const { status } = await Notifications.requestPermissionsAsync();
  //       finalStatus = status;
  //     }
  //     if (finalStatus !== "granted") {
  //       handleRegistrationError(
  //         "Permission not granted to get push token for push notification!"
  //       );
  //       return;
  //     }
  //     //Pegar o ID do projeto
  //     const projectId =
  //       Constants?.expoConfig?.extra?.eas?.projectId ??
  //       Constants?.easConfig?.projectId;
  //     if (!projectId) {
  //       handleRegistrationError("Project ID not found");
  //     }
  //     try {
  //       //Pegar o token do Expo
  //       const pushTokenString = (
  //         await Notifications.getExpoPushTokenAsync({
  //           projectId,
  //         })
  //       ).data;

  //       if (pushTokenString) {
  //         //Salvar o expoPushToken no banco (construir endpoint)

  //         //Buscar o objeto do usuário no AsyncStorage
  //         const jsonValue = await AsyncStorage.getItem("user");
  //         const parsedValue: asyncUser =
  //           jsonValue != null ? JSON.parse(jsonValue) : null;
  //         if (parsedValue) {
  //           //Verificar se já existe token do expo
  //           if (!parsedValue.deviceKey) {
  //             const deviceKey = generateStringKey(15);
  //             parsedValue.deviceKey = deviceKey;
  //           }
  //           parsedValue.expoPushToken = pushTokenString;
  //           if (parsedValue.userToken) {
  //             authContext.login();
  //           }
  //           await AsyncStorage.setItem("user", JSON.stringify(parsedValue));
  //         } else {
  //           const deviceKey = generateStringKey(15);
  //           const user: asyncUser = {
  //             expoPushToken: pushTokenString,
  //             deviceKey: deviceKey,
  //           };
  //           await AsyncStorage.setItem("user", JSON.stringify(user));
  //         }
  //       }
  //       return pushTokenString;
  //     } catch (e: unknown) {
  //       handleRegistrationError(`${e}`);
  //     }
  //   } else {
  //     handleRegistrationError(
  //       "Must use physical device for push notifications"
  //     );
  //   }
  // }

  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
};

export default App;
