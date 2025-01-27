import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { Container } from "../../components/Container";
import Indexer from "../../components/Indexer";
import Colors from "../../constants/Colors";
import { RootListType } from "../../navigation/root";

type newsScreenNavigationProp = NativeStackNavigationProp<RootListType, "News">;

interface newsScreenProps {
  navigation: newsScreenNavigationProp;
}

const NewsScreen = ({ navigation }: newsScreenProps) => {
  const [news, setNews] = useState<any[]>([]);
  const [limit, setLimit] = useState<number>(5);
  const [page, setPage] = useState<number>(0);

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        try {
          const newsResponse = await axios.get(
            `https://api.legacy.publicacoesinr.com.br/news?limit=${limit}&page=${0}`
          );
          if (newsResponse.data.success) {
            setNews(newsResponse.data.data);
            setPage(() => 0);
          }
        } catch (error: any) {
          console.warn(error.message);
        }
      };

      fetchData();
    }, [limit])
  );

  useEffect(() => {
    const initialSetup = async () => {
      try {
        const newsResponse = await axios.get(
          `https://api.legacy.publicacoesinr.com.br/news?limit=${limit}&page=${page}`
        );
        if (newsResponse.data.success) {
          setNews(() => newsResponse.data.data);
        }
      } catch (error: any) {
        console.warn(error.message);
      }
    };
    initialSetup();
  }, []);

  const loadMoreNews = async () => {
    try {
      const newPage = page + 1;
      setPage((prev) => prev + 1);
      const newsResponse = await axios.get(
        `https://api.legacy.publicacoesinr.com.br/news?limit=${limit}&page=${newPage}`
      );
      if (newsResponse.data.success) {
        setNews((prev) => [...prev, ...newsResponse.data.data]);
      }
    } catch (error: any) {
      console.warn(error.message);
    }
  };

  return (
    <Container>
      <ScrollView style={{ flex: 1 }}>
        <Indexer
          data={news}
          title="Últimas Notícias"
          onPress={(item1: any) => {
            navigation.navigate("Multipurpose", {
              item: { id: item1.id, label: item1.label, tipo: item1.tipo },
            });
          }}
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={loadMoreNews}>
          <Text style={styles.buttonText}>Clique Aqui para ver mais</Text>
        </TouchableOpacity>
      </ScrollView>
    </Container>
  );
};

export default NewsScreen;

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
