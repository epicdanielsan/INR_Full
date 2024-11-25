import { DrawerNavigationProp } from "@react-navigation/drawer";
import axios from "axios";
import { useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";
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

  const handlePress = (item: any) => {
    navigation.navigate(item.route, { classificador: item });
  };

  useEffect(() => {
    const initialSetup = async () => {
      try {
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
      } catch (error: any) {
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
        <DateIndexer data={items} onPress={handlePress} />
      </ScrollView>
    </Container>
  );
};

export default PRClassificator;
