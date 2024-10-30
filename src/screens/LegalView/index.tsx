import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
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

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        try {
          const legalViewResponse = await axios.get(
            `https://api.legacy.publicacoesinr.com.br/pareceres?limit=${limit}&page=${page}`
          );
          if (legalViewResponse.data.success) {
            setLegalView(legalViewResponse.data.data);
          }
        } catch (error: any) {
          console.log(error.message);
        }
      };

      fetchData();
    }, [limit, page])
  );

  useEffect(() => {
    const initialSetup = async () => {
      try {
        const legalViewResponse = await axios.get(
          `https://api.legacy.publicacoesinr.com.br/pareceres?limit=${limit}&page=${page}`
        );
        if (legalViewResponse.data.success) {
          setLegalView(() => legalViewResponse.data.data);
        }
      } catch (error: any) {
        console.log(error.message);
      }
    };
    initialSetup();
  }, []);

  const loadMoreLegalViews = async () => {
    try {
      const newLimit = limit + 5;
      const legalViewResponse = await axios.get(
        `https://api.legacy.publicacoesinr.com.br/pareceres?limit=${newLimit}&page=${page}`
      );
      if (legalViewResponse.data.success) {
        setLegalView((prev) => [...prev, ...legalViewResponse.data.data]);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <Container>
      <ScrollView style={{ flex: 1 }}>
        <Indexer
          data={legalView}
          title="Últimos Pareceres CGJ SP"
          onPress={(item1: any) => {
            console.log(item1);

            navigation.navigate("Multipurpose", {
              item: {
                id: item1.idjurisprudencia,
                label: "Pareceres",
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
});
