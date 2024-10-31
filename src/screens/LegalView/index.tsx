import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { Container } from "../../components/Container";
import Indexer from "../../components/Indexer";
import Colors from "../../constants/Colors";
import { RootListType } from "../../navigation/root";

type legalViewScreenNavigationProp = NativeStackNavigationProp<
  RootListType,
  "LegalView"
>;

interface legalViewScreenProps {
  navigation: legalViewScreenNavigationProp;
}

const LegalViewScreen = ({ navigation }: legalViewScreenProps) => {
  const [legalView, setLegalView] = useState<any[]>([]);
  const [limit, setLimit] = useState<number>(5);
  const [page, setPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        try {
          setIsLoading(true);
          const legalViewResponse = await axios.get(
            `https://api.legacy.publicacoesinr.com.br/pareceres?limit=${limit}&page=${page}`
          );
          if (legalViewResponse.data.success) {
            const parsedLegalViews = legalViewResponse.data.data.map(
              (item: any) => {
                return { ...item, titulo: item.ementa };
              }
            );
            setLegalView(() => parsedLegalViews);
            setPage(() => 0);
          }
          setIsLoading(false);
        } catch (error: any) {
          console.log(error.message);
          setIsLoading(false);
        }
      };

      fetchData();
    }, [limit, page])
  );

  useEffect(() => {
    const initialSetup = async () => {
      try {
        setIsLoading(true);
        const legalViewResponse = await axios.get(
          `https://api.legacy.publicacoesinr.com.br/pareceres?limit=${limit}&page=${page}`
        );
        if (legalViewResponse.data.success) {
          const parsedLegalViews = legalViewResponse.data.data.map(
            (item: any) => {
              return { ...item, titulo: item.ementa };
            }
          );

          setLegalView((prev) => parsedLegalViews);
        }
        setIsLoading(false);
      } catch (error: any) {
        console.log(error.message);
        setIsLoading(false);
      }
    };
    initialSetup();
  }, []);

  const loadMoreLegalViews = async () => {
    try {
      setIsLoading(true);
      const newPage = page + 1;
      setPage((prev) => prev + 1);
      const legalViewResponse = await axios.get(
        `https://api.legacy.publicacoesinr.com.br/pareceres?limit=${limit}&page=${newPage}`
      );
      if (legalViewResponse.data.success) {
        const parsedLegalViews = legalViewResponse.data.data.map(
          (item: any) => {
            return { ...item, titulo: item.ementa };
          }
        );
        setLegalView((prev) => [...prev, ...parsedLegalViews]);
      }
      setIsLoading(false);
    } catch (error: any) {
      console.log(error.message);
      setIsLoading(false);
    }
  };

  return (
    <Container>
      {isLoading ? (
        <View style={styles.gifContainer}>
          <Image
            source={require("../../../assets/images/Loading.gif")}
            style={styles.gif}
          />
        </View>
      ) : (
        <ScrollView style={{ flex: 1 }}>
          <Indexer
            data={legalView}
            title="Últimos Pareceres CGJ SP"
            onPress={(item1: any) => {
              navigation.navigate("Multipurpose", {
                item: {
                  id: item1.id,
                  label: "Pareceres CGJ SP",
                  tipo: "pareceres",
                },
              });
            }}
          />
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={loadMoreLegalViews}
          >
            <Text style={styles.buttonText}>Clique Aqui para ver mais</Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </Container>
  );
};

export default LegalViewScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 80,
    borderColor: Colors.primary.dark,
    borderWidth: 2,
    borderRadius: 5,
    padding: 15,
  },
  buttonText: {
    fontSize: 18,
    color: Colors.primary.light,
  },
  gif: {
    top: -50,
    width: 200,
    height: 200,
  },
  gifContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
