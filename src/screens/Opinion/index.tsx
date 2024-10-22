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

type opinionType = {
  data_registro: string;
  datacad: string;
  id: number;
  label: string;
  resumo: string | null;
  tipo: string;
  titulo: string;
};

type opinionScreenNavigationProp = NativeStackNavigationProp<
  RootListType,
  "Opinion"
>;

interface opinionScreenProps {
  navigation: opinionScreenNavigationProp;
}

const OpinionScreen = ({ navigation }: opinionScreenProps) => {
  const [opinions, setOpinions] = useState<any[]>([]);
  const [limit, setLimit] = useState<number>(5);
  const [page, setPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        try {
          setIsLoading(true);
          const opinionResponse = await axios.get(
            `https://api.legacy.publicacoesinr.com.br/opinion?limit=${limit}&page=${0}`
          );
          if (opinionResponse.data.success) {
            const parsedOpinions = opinionResponse.data.data.map(
              (item: opinionType) => {
                return { ...item, datacad: item.data_registro };
              }
            );
            setOpinions(() => parsedOpinions);
            setPage(() => 0);
            setIsLoading(false);
          }
          setIsLoading(false);
        } catch (error: any) {
          console.log(error.message);
          setIsLoading(false);
        }
      };

      fetchData();
    }, [limit])
  );

  useEffect(() => {
    const initialSetup = async () => {
      try {
        setIsLoading(true);
        const opinionResponse = await axios.get(
          `https://api.legacy.publicacoesinr.com.br/opinion?limit=${limit}&page=${page}`
        );

        if (opinionResponse.data.success) {
          const parsedOpinions = opinionResponse.data.data.map(
            (item: opinionType) => {
              return { ...item, datacad: item.data_registro };
            }
          );
          setOpinions(() => parsedOpinions);
          setIsLoading(false);
        }
        setIsLoading(false);
      } catch (error: any) {
        console.log(error.message);
        setIsLoading(false);
      }
    };
    initialSetup();
  }, []);

  const loadMoreOpinions = async () => {
    try {
      const newPage = page + 1;
      setPage((prev) => prev + 1);
      const opinionResponse = await axios.get(
        `https://api.legacy.publicacoesinr.com.br/opinion?limit=${limit}&page=${newPage}`
      );
      if (opinionResponse.data.success) {
        const parsedOpinions = opinionResponse.data.data.map(
          (item: opinionType) => {
            return { ...item, datacad: item.data_registro };
          }
        );
        setOpinions((prev) => [...prev, ...parsedOpinions]);
      }
    } catch (error: any) {
      console.log(error.message);
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
            data={opinions}
            title="Últimos Artigos"
            onPress={(item1: any) => {
              navigation.navigate("Multipurpose", {
                item: { id: item1.id, label: item1.label, tipo: item1.tipo },
              });
            }}
          />
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={loadMoreOpinions}
          >
            <Text style={styles.buttonText}>Clique Aqui para ver mais</Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </Container>
  );
};

export default OpinionScreen;

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
