import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import DateIndexer, {
  itemProps,
} from "../../components/Classificators/DateIndexer";
import { Container } from "../../components/Container";
import { RootListType } from "../../navigation/root";
import PRIntroduction from "./PRIntroduction";
import styles from "./styles";

type DateIndexerNavigationProp = DrawerNavigationProp<
  RootListType,
  "PRClassificator"
>;

interface navigationProps {
  navigation: DateIndexerNavigationProp;
}

const PRClassificator = ({ navigation }: navigationProps) => {
  const [limit, setLimit] = useState<number>(10);
  const [page, setPage] = useState<number>(0);
  const [items, setItems] = useState<any[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handlePress = (item: any) => {
    navigation.navigate(item.route, { classificador: item });
  };

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        try {
          setIsLoading(true);
          const stateObj = await axios.get(
            `https://api.legacy.publicacoesinr.com.br/classifiers/state?acronym=PR`
          );
          if (stateObj.data.success) {
            const stateId = stateObj.data.data.idestado;
            const itemsList = await axios.get(
              `https://api.legacy.publicacoesinr.com.br/classifiers?id=${stateId}&limit=${limit}&page=${0}`
            );
            if (itemsList.data.success) {
              const parsedValues: itemProps[] = itemsList.data.data.map(
                (item: any, index: number) => {
                  return {
                    id: item.id,
                    date: item.datacad,
                    route: "IndexClassScreen",
                    type: "PR",
                  };
                }
              );
              setItems(() => [...parsedValues]);
            }
          }
          setIsLoading(false);
        } catch (error: any) {
          setIsLoading(false);
          console.log(error.message);
        }
      };

      fetchData();
    }, [limit, page])
  );

  useEffect(() => {
    const initialSetup = async () => {
      try {
        setIsLoading(true);
        const stateObj = await axios.get(
          `https://api.legacy.publicacoesinr.com.br/classifiers/state?acronym=PR`
        );
        if (stateObj.data.success) {
          const stateId = stateObj.data.data.idestado;
          const itemsList = await axios.get(
            `https://api.legacy.publicacoesinr.com.br/classifiers?id=${stateId}&limit=${limit}&page=${page}`
          );
          if (itemsList.data.success) {
            const parsedValues: itemProps[] = itemsList.data.data.map(
              (item: any, index: number) => {
                return {
                  id: item.id,
                  date: item.datacad,
                  route: "IndexClassScreen",
                  type: "PR",
                };
              }
            );
            setItems(() => [...parsedValues]);
          }
        }
        setIsLoading(false);
      } catch (error: any) {
        setIsLoading(false);
        console.warn(error.message);
      }
    };
    initialSetup();
  }, []);

  return (
    <Container>
      <ScrollView>
        <PRIntroduction />
        <Text style={styles.indexTitle}>Índice</Text>
        {isLoading ? (
          <View style={styles.gifContainer}>
            <Image
              source={require("../../../assets/images/Loading.gif")}
              style={styles.gif}
            />
          </View>
        ) : (
          <DateIndexer data={items} onPress={handlePress} />
        )}
      </ScrollView>
    </Container>
  );
};

export default PRClassificator;
