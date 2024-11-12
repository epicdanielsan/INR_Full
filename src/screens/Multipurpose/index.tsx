import AsyncStorage from "@react-native-async-storage/async-storage";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RouteProp } from "@react-navigation/native";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { Container } from "../../components/Container";
import { AuthContext } from "../../contexts/AuthenticationContext";
import { asyncUser } from "../../lib/types";
import { RootListType } from "../../navigation/root";
import EditorsMessageItem from "../EditorsMessage/EditorsMessageItem";
import JurisprudenceItem from "../Jurispudence/JurisprudenceItem";
import LegalViewItem from "../LegalView/LegalViewItem";
import LegislationItem from "../Legislation/LegislationItem";
import NewsItem from "../News/NewsItem";
import OpinionItem from "../Opinion/OpinionItem";
import QuestionsAndAnswersItem from "../QuestionsAndAnswers/QuestionsAndAnswersItem";
import SuplementsItem from "../Suplements/SuplementsItem";

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
  const { item } = route.params;

  const [fetcheditem, setFetcheditem] = useState<any>({});
  const [itemType, setItemType] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [userToken, setuserToken] = useState<string | undefined>(undefined);

  const authContext = useContext(AuthContext);

  navigation.setOptions({
    headerTitle: item.label,
  });

  useEffect(() => {
    const initialFetch = async () => {
      const jsonValue = await AsyncStorage.getItem("user");
      const parsedValue: asyncUser =
        jsonValue != null ? JSON.parse(jsonValue) : null;
      if (parsedValue.userToken) {
        setuserToken(() => parsedValue.userToken);
      }
    };
    initialFetch();
  }, []);

  const commonGet = async (tipo: string, id: number) => {
    const response = await axios.get(
      `https://api.legacy.publicacoesinr.com.br/${tipo}/${id}`
    );

    if (response.data) {
      return response.data.data;
    }
  };
  const loggedGet = async (tipo: string, id: number, token: string) => {
    const response = await axios.get(
      `https://api.legacy.publicacoesinr.com.br/${tipo}/${id}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );

    if (response.data) {
      return response.data.data;
    }
  };

  const fetchItemUrlByType = async () => {
    switch (item.tipo) {
      case "news":
        return commonGet("news", item.id);
      case "opinion":
        return loggedGet("opinion", item.id, userToken || "");
      case "legislation":
        return loggedGet("legislation", item.id, userToken || "");
      case "jurisprudence":
        return loggedGet("jurisprudence", item.id, userToken || "");
      case "pareceres":
        return loggedGet("pareceres", item.id, userToken || "");
      case "questions-answers":
        if (userToken) {
          return loggedGet("questions-answers", item.id, userToken || "");
        } else {
          return commonGet("questions-answers", item.id);
        }
      case "messages-editors":
        if (userToken) {
          return loggedGet("messages-editors", item.id, userToken || "");
        } else {
          return commonGet("messages-editors", item.id);
        }
      case "supplements":
        if (userToken) {
          return loggedGet("supplements", item.id, userToken || "");
        } else {
          return commonGet("supplements", item.id);
        }

      default:
        break;
    }
  };

  useEffect(() => {
    const getItem = async () => {
      try {
        setLoading(true);
        setFetcheditem({});

        const itemResponse = await fetchItemUrlByType();
        if (itemResponse) {
          setFetcheditem(() => itemResponse);
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

  const renderSwitch = () => {
    switch (item.tipo) {
      case "news":
        return <NewsItem item={fetcheditem} />;
      case "opinion":
        return <OpinionItem item={fetcheditem} />;
      case "legislation":
        return <LegislationItem item={fetcheditem} />;
      case "jurisprudence":
        return <JurisprudenceItem item={fetcheditem} />;
      case "pareceres":
        return <LegalViewItem item={fetcheditem} />;
      case "questions-answers":
        return <QuestionsAndAnswersItem item={fetcheditem} />;
      case "messages-editors":
        return <EditorsMessageItem item={fetcheditem} />;
      case "supplements":
        return <SuplementsItem item={fetcheditem} />;
      default:
        break;
    }
  };

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
        <ScrollView style={styles.container}>{renderSwitch()}</ScrollView>
      )}
    </Container>
  );
};

export default MultipurposeScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
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
