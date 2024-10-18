import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RouteProp } from "@react-navigation/native";
import axios from "axios";
import { decode } from "html-entities";
import { useEffect, useState } from "react";
import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import RenderHtml from "react-native-render-html";
import { Container } from "../../components/Container";
import Colors from "../../constants/Colors";
import { RootListType } from "../../navigation/root";

type MultipurposeClassScreenRouteProp = RouteProp<RootListType, "Multipurpose">;

type MultipurposeClassScreenNavigationProp = DrawerNavigationProp<
  RootListType,
  "Multipurpose"
>;

interface MultipurposeClassScreenProps {
  route: MultipurposeClassScreenRouteProp;
  navigation: MultipurposeClassScreenNavigationProp;
}

const MultipurposeScreen = ({
  navigation,
  route,
}: MultipurposeClassScreenProps) => {
  const { width } = useWindowDimensions();
  const { item } = route.params;

  const [fetcheditem, setFetcheditem] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);

  navigation.setOptions({
    headerTitle: item.label,
  });

  useEffect(() => {
    const getItem = async () => {
      try {
        setLoading(true);
        setFetcheditem({});

        const itemResponse = await axios.get(
          `https://api.legacy.publicacoesinr.com.br/${item.tipo}/${item.id}`
        );
        if (itemResponse.data.success) {
          setFetcheditem(() => itemResponse.data.data);
        }
        setLoading(false);
      } catch (error: any) {
        console.warn(error.message);
        setLoading(false);
      }
    };
    if (route.params?.item?.id) {
      getItem();
    }
  }, [route.params?.item?.id]);

  return (
    <Container>
      {loading ? (
        <View style={styles.gifContainer}>
          <Image
            source={require("../../../assets/images/Loading.gif")}
            style={styles.gif}
          />
        </View>
      ) : (
        <ScrollView style={styles.container}>
          <RenderHtml
            contentWidth={width}
            source={{ html: decode(fetcheditem.titulo) }}
            baseStyle={styles.title}
          />

          <RenderHtml
            contentWidth={width}
            source={{ html: decode(fetcheditem.datacad) }}
            baseStyle={styles.title}
          />

          <RenderHtml
            contentWidth={width}
            source={{ html: decode(fetcheditem.texto) }}
            baseStyle={styles.text}
          />
          {fetcheditem.fonte && (
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(fetcheditem.fonte);
              }}
            >
              <RenderHtml
                contentWidth={width}
                source={{ html: decode(fetcheditem.fonte) }}
                baseStyle={styles.font}
              />
            </TouchableOpacity>
          )}
        </ScrollView>
      )}
    </Container>
  );
};

export default MultipurposeScreen;

const styles = StyleSheet.create({
  title: {
    marginLeft: 15,
    marginVertical: 5,
    color: Colors.primary.title,
    fontSize: 17,
  },
  container: {
    marginHorizontal: 10,
  },
  text: {
    fontSize: 15,
  },
  font: {
    marginBottom: 30,
    color: Colors.primary.light,
  },
  gifContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gif: {
    top: -50,
    width: 200,
    height: 200,
  },
});
