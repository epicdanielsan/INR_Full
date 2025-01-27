import axios from "axios";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { decode } from "html-entities";
import { useContext, useEffect, useState } from "react";
import {
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import RenderHTML from "react-native-render-html";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import CustomCarousel from "../../components/Carousel";
import { Container } from "../../components/Container";
import { BASE_API_HOME } from "../../constants/api";
import Colors from "../../constants/Colors";
import { AuthContext } from "../../contexts/AuthenticationContext";
import { asyncUser } from "../../lib/types";
import { RootListType } from "../../navigation/root";
import styles from "./styles";

type homeScreenNavigationProp = NativeStackNavigationProp<
  RootListType,
  "Início"
>;

interface homeScreenProps {
  navigation: homeScreenNavigationProp;
}

const HomeScreen = ({ navigation }: homeScreenProps) => {
  const [banners, setBanners] = useState<any[]>([]);
  const [destaques, setDestaques] = useState<any[]>([]);
  const [publicidade, setPublicidade] = useState<any[]>([]);
  const authContext = useContext(AuthContext);
  const { width } = useWindowDimensions();

  // async function sendPushNotification(expoPushToken: string) {
  //   const message = {
  //     to: expoPushToken,
  //     sound: "default",
  //     title: "INR Publicações",
  //     body: "Esta é uma notificação do Expo para o Leitor INR",
  //     data: { someData: "goes here" },
  //   };

  //   await fetch(EXPO_PUSH, {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Accept-encoding": "gzip, deflate",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(message),
  //   });
  // }

  //Buscar os banners na API
  const initialSetup = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("user");
      const parsedValue: asyncUser =
        jsonValue != null ? JSON.parse(jsonValue) : null;
      if (parsedValue.userToken) {
        authContext.login();
      }
      const apiFetch = await axios.get(BASE_API_HOME);

      if (apiFetch.data.success) {
        const response = apiFetch.data.data;

        if (response.banners.length > 0) {
          setBanners(() => response.banners);
        }
        if (response.links.length > 0) {
          setDestaques(response.links);
        }
        if (response.publicidade.length > 0) {
          const parsedUrls = response.publicidade.map(
            (item: any, index: number) => {
              const imageAddress = decode(item.texto);
              return {
                src: imageAddress
                  .slice(imageAddress.indexOf("src"))
                  .split('"')[1],
                href: imageAddress
                  .slice(imageAddress.indexOf("href"))
                  .split('"')[1],
              };
            }
          );
          setPublicidade(() => [...parsedUrls]);
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
      <ScrollView>
        {destaques.slice(0, 15).map((item: any, index: number) => {
          if ((index + 1) % 3 === 0 && publicidade[Math.floor(index / 3)]) {
            // const srcMatch = publicidade[Math.floor(index / 3)].texto.match(
            //   /<img[^>]+src="([^"]+)"/
            // );
            // console.log(decode(publicidade[Math.floor(index / 3)].texto));
            // console.log(srcMatch);
          }

          return (
            <View>
              <TouchableOpacity
                key={index}
                onPress={() => {
                  navigation.navigate("Multipurpose", {
                    item: {
                      id: item.id,
                      label: item.label,
                      tipo: item.tipo,
                    },
                  });
                }}
              >
                <View style={styles.highlightContainer}>
                  <View style={{ flex: 3 }}>
                    <Text style={{ color: Colors.primary.title }}>
                      {item.label}
                    </Text>
                    <RenderHTML
                      contentWidth={width}
                      source={{
                        html: decode(item.content[0].titulo, {
                          level: "html5",
                        }),
                      }}
                      baseStyle={styles.highlight}
                    />
                  </View>
                  <View style={{ flex: 1, marginLeft: 25 }}>
                    <Image
                      source={{ uri: `${item.content[0].img}` }}
                      style={{ height: 90, width: 90, borderRadius: 5 }}
                    />
                  </View>
                </View>
              </TouchableOpacity>
              {(index + 1) % 3 === 0 && publicidade[Math.floor(index / 3)] && (
                <View style={{ flex: 1, marginHorizontal: 25 }}>
                  <TouchableOpacity
                    onPress={() => {
                      // Linking.openURL("https://tac7.com.br/");
                      Linking.openURL(publicidade[Math.floor(index / 3)].href);
                    }}
                  >
                    <Image
                      source={{
                        // uri: `${"https://inrpublicacoes.com.br/sistema/kcfinder_up/images/TAC7_be.png"}`,
                        uri: `${publicidade[Math.floor(index / 3)].src}`,
                      }}
                      style={{
                        height: 100,
                        width: "100%",
                        borderRadius: 5,
                        resizeMode: "contain",
                      }}
                    />
                  </TouchableOpacity>
                  {/* <Text>{decode(publicidade[Math.floor(index / 3)].texto).src}</Text> */}
                </View>
              )}
            </View>
          );
        })}
      </ScrollView>

      <ScrollView>
        {/* <Highlights numberOfHighlights={10} minHeight={700} data={destaques} /> */}
      </ScrollView>
    </Container>
  );
};

export default HomeScreen;
