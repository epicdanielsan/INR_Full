import { useNavigation } from "@react-navigation/native";
import axios from "axios";

import { useContext, useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import CustomCarousel from "../../components/Carousel";
import { Container } from "../../components/Container";
import Highlights from "../../components/Highlights";
import { BASE_API_HOME, EXPO_PUSH } from "../../constants/api";
import Colors from "../../constants/Colors";
import { AuthContext } from "../../contexts/AuthenticationContext";
import styles from "./styles";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [banners, setBanners] = useState<any[]>([]);
  const [destaques, setDestaques] = useState<any[]>([]);
  const authContext = useContext(AuthContext);

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

  //Buscar os banners na API
  const initialSetup = async () => {
    try {
      const apiFetch = await axios.get(BASE_API_HOME);
      if (apiFetch.data.success) {
        const response = apiFetch.data.data;

        if (response.banners.length > 0) {
          setBanners(() => response.banners);
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
      {banners.length > 0 && <CustomCarousel data={banners} />}
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
