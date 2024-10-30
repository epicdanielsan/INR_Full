import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import { decode } from "html-entities";
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

type legislationScreenNavigationProp = NativeStackNavigationProp<
  RootListType,
  "Legislation"
>;

interface legislationScreenProps {
  navigation: legislationScreenNavigationProp;
}

const LegislationScreen = ({ navigation }: legislationScreenProps) => {
  const [legislations, setLegislations] = useState<any[]>([]);
  const [limit, setLimit] = useState<number>(5);
  const [page, setPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        try {
          setIsLoading(true);
          const legislationResponse = await axios.get(
            `https://api.legacy.publicacoesinr.com.br/legislation?limit=${limit}&page=${0}`
          );
          if (legislationResponse.data.success) {
            const maped = legislationResponse.data.data.map((item: any) => {
              let titulo = item.titulo;

              // let parsedTitulo = titulo.match(/<p>(.*?)<\/p>/)[1];

              let resumo = item.resumo;
              // let parsedResumo = resumo.match(/<p>(.*?)<\/p>/)[1];
              // let finalTitle = `<p>${parsedTitulo} - ${parsedResumo}</p>`;

              // item = { ...item, titulo: finalTitle };
              return item;
            });
            setLegislations(() => maped);
            setIsLoading(false);
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
      let finalTitle: string = "";
      try {
        setIsLoading(true);
        const legislationResponse = await axios.get(
          `https://api.legacy.publicacoesinr.com.br/legislation?limit=${limit}&page=${page}`
        );

        if (legislationResponse.data.success) {
          const maped = legislationResponse.data.data.map((item: any) => {
            let titulo: string = decode(item.titulo);
            let resumo: string = decode(item.resumo);
            console.log("titulo1", item.titulo);
            console.log("titulo", titulo);
            console.log("resumo", resumo);

            if (titulo && resumo) {
              let parsedTitulo = titulo.match(/<p>(.*?)<\/p>/);
              // console.log(parsedTitulo);

              let parsedResumo = resumo.match(/<p>(.*?)<\/p>/);
              // console.log(parsedResumo);

              if (
                parsedTitulo &&
                parsedTitulo?.length > 0 &&
                parsedResumo &&
                parsedResumo?.length > 0
              ) {
                finalTitle = `${parsedTitulo[1]} - ${parsedResumo[1]}`;
                console.log("finalTitle", finalTitle);
              }
            }
            item = { ...item, titulo: finalTitle };
            return item;
          });
          setLegislations(() => maped);
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

  const loadMorelegislations = async () => {
    try {
      const newPage = page + 1;
      setPage(() => newPage);
      const legislationResponse = await axios.get(
        `https://api.legacy.publicacoesinr.com.br/legislation?limit=${limit}&page=${newPage}`
      );
      if (legislationResponse.data.success) {
        const maped = legislationResponse.data.data.map((item: any) => {
          let titulo = item.titulo;

          let parsedTitulo = titulo.match(/<p>(.*?)<\/p>/)[1];

          let resumo = item.resumo;
          let parsedResumo = resumo.match(/<p>(.*?)<\/p>/)[1];
          let finalTitle = `<p>${parsedTitulo} - ${parsedResumo}</p>`;

          item = { ...item, titulo: finalTitle };
          return item;
        });
        setLegislations((prev) => [...prev, maped]);
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
            data={legislations}
            title="Últimos Atos Legais"
            onPress={(item1: any) => {
              navigation.navigate("Multipurpose", {
                item: { id: item1.id, label: item1.label, tipo: item1.tipo },
              });
            }}
          />
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={loadMorelegislations}
          >
            <Text style={styles.buttonText}>Clique Aqui para ver mais</Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </Container>
  );
};

export default LegislationScreen;

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
