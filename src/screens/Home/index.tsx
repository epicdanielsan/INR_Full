import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Constants from "expo-constants";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { useEffect, useRef, useState } from "react";
import { Platform, Text, TouchableOpacity, View } from "react-native";
import CustomCarousel from "../../components/Carousel";
import { Container } from "../../components/Container";
import Highlights from "../../components/Highlights";
import { BASE_API_HOME, EXPO_PUSH } from "../../constants/api";
import Colors from "../../constants/Colors";
import styles from "./styles";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [banners, setBanners] = useState<any[]>([]);
  const [destaques, setDestaques] = useState<any[]>([]);

  const [expoPushToken, setExpoPushToken] = useState<string>("");
  const [notification, setNotification] = useState<
    Notifications.Notification | undefined
  >(undefined);
  const notificationListener = useRef<Notifications.Subscription>();
  const responseListener = useRef<Notifications.Subscription>();

  async function sendPushNotification(expoPushToken: string) {
    const message = {
      to: expoPushToken,
      sound: "default",
      title: "INR Publicações",
      body: "Esta é uma notificação do Expo para o Leitor INR",
      data: { someData: "goes here" },
    };

    await fetch(EXPO_PUSH, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Accept-encoding": "gzip, deflate",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
  }

  function handleRegistrationError(errorMessage: string) {
    alert(errorMessage);
    throw new Error(errorMessage);
  }

  async function registerForPushNotificationsAsync() {
    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }

    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        handleRegistrationError(
          "Permission not granted to get push token for push notification!"
        );
        return;
      }
      const projectId =
        Constants?.expoConfig?.extra?.eas?.projectId ??
        Constants?.easConfig?.projectId;
      if (!projectId) {
        handleRegistrationError("Project ID not found");
      }
      try {
        const pushTokenString = (
          await Notifications.getExpoPushTokenAsync({
            projectId,
          })
        ).data;
        //Salvar o Expo Push Token no Async Storage
        if (pushTokenString) {
          //Salvar o expoPushToken no banco (construir endpoint)

          const jsonValue = await AsyncStorage.getItem("user");
          const valueStored = jsonValue != null ? JSON.parse(jsonValue) : null;
          if (valueStored) {
            valueStored.expoPushToken = pushTokenString;
            await AsyncStorage.setItem("user", JSON.stringify(valueStored));
          }
          // console.log("valueStored", valueStored);
          // sendPushNotification(pushTokenString);
        }
        return pushTokenString;
      } catch (e: unknown) {
        handleRegistrationError(`${e}`);
      }
    } else {
      handleRegistrationError(
        "Must use physical device for push notifications"
      );
    }
  }

  useEffect(() => {
    registerForPushNotificationsAsync()
      .then((token) => setExpoPushToken(token ?? ""))
      .catch((error: any) => setExpoPushToken(`${error}`));

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      notificationListener.current &&
        Notifications.removeNotificationSubscription(
          notificationListener.current
        );
      responseListener.current &&
        Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  //Buscar os banners na API
  const initialSetup = async () => {
    try {
      const apiFetch = await axios.get(BASE_API_HOME);
      if (apiFetch.data.success) {
        const response = apiFetch.data.data;
        if (response.banners.length > 0) {
          setBanners(response.banners);
        }
        if (response.links.length > 0) {
          setDestaques(response.links);
        }
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    initialSetup();
  }, []);

  return (
    <Container backgroundColor={Colors.primary.background}>
      <CustomCarousel data={banners} />
      <View style={styles.highlightContainer}>
        <Text style={styles.highlightTitle}>Destaques</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Destaques" as never);
          }}
        >
          <Text style={styles.seeAllTitle}>Ver Todos</Text>
        </TouchableOpacity>
      </View>
      <Highlights numberOfHighlights={5} minHeight={700} data={destaques} />
    </Container>
  );
};

export default HomeScreen;
