import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { Container } from "../../components/Container";
import Indexer from "../../components/Indexer";
import Colors from "../../constants/Colors";
import { RootListType } from "../../navigation/root";

type jurisprudenceScreenNavigationProp = NativeStackNavigationProp<
  RootListType,
  "Jurisprudence"
>;

interface jurisprudenceScreenProps {
  navigation: jurisprudenceScreenNavigationProp;
}

const JurisprudenceScreen = ({ navigation }: jurisprudenceScreenProps) => {
  const [jurisprudence, setJurisprudence] = useState<any[]>([]);
  const [limit, setLimit] = useState<number>(5);
  const [page, setPage] = useState<number>(0);

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        try {
          const newsResponse = await axios.get(
            `https://api.legacy.publicacoesinr.com.br/jurisprudence?limit=${limit}&page=${page}`
          );
          if (newsResponse.data.success) {
            setJurisprudence(newsResponse.data.data);
          }
        } catch (error: any) {
          console.warn(error.message);
        }
      };

      fetchData();
    }, [limit, page])
  );

  useEffect(() => {
    const initialSetup = async () => {
      try {
        const jurisprudenceResponse = await axios.get(
          `https://api.legacy.publicacoesinr.com.br/jurisprudence?limit=${limit}&page=${page}`
        );
        if (jurisprudenceResponse.data.success) {
          setJurisprudence(() => jurisprudenceResponse.data.data);
        }
      } catch (error: any) {
        console.warn(error.message);
      }
    };
    initialSetup();
  }, []);

  const loadMoreJurisprudence = async () => {
    try {
      const newLimit = limit + 5;
      const newsResponse = await axios.get(
        `https://api.legacy.publicacoesinr.com.br/jurisprudence?limit=${newLimit}&page=${page}`
      );
      if (newsResponse.data.success) {
        setJurisprudence((prev) => [...prev, ...newsResponse.data.data]);
      }
    } catch (error: any) {
      console.warn(error.message);
    }
  };

  return (
    <Container>
      <ScrollView style={{ flex: 1 }}>
        <Indexer
          data={jurisprudence}
          title="Últimas Decisões"
          onPress={(item1: any) => {
            navigation.navigate("Multipurpose", {
              item: {
                id: item1.id,
                label: "Jurisprudência",
                tipo: "jurisprudence",
              },
            });
          }}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={loadMoreJurisprudence}
        >
          <Text style={styles.buttonText}>Clique Aqui para ver mais</Text>
        </TouchableOpacity>
      </ScrollView>
    </Container>
  );
};

export default JurisprudenceScreen;

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
});
