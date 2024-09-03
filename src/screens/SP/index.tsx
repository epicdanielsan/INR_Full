import { DrawerNavigationProp } from "@react-navigation/drawer";
import { ScrollView, Text } from "react-native";
import DateIndexer from "../../components/Classificators/DateIndexer";
import { Container } from "../../components/Container";
import { RootListType } from "../../navigation/root";
import dataDummyArray from "./dataDummyArray";
import SPIntroduction from "./SPIntroduction";
import styles from "./styles";

type DateIndexerNavigationProp = DrawerNavigationProp<
  RootListType,
  "SPClassificator"
>;

interface navigationProps {
  navigation: DateIndexerNavigationProp;
}

const SPClassificator = ({ navigation }: navigationProps) => {
  const handlePress = (item: any) => {
    navigation.navigate(item.route, { classificador: item });
  };

  return (
    <Container>
      <ScrollView>
        <SPIntroduction />
        <Text style={styles.indexTitle}>Índice</Text>
        <DateIndexer data={dataDummyArray} onPress={handlePress} />
      </ScrollView>
    </Container>
  );
};

export default SPClassificator;
