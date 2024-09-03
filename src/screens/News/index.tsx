import { ScrollView } from "react-native";
import { Container } from "../../components/Container";
import Indexer from "../../components/Indexer";
import newsMockData from "./newsMockData";

const NewsScreen = () => {
  // const navigation = useNavigation();

  // navigation.setOptions({
  //   headerTitle: "Daniel",
  // });

  return (
    <Container>
      <ScrollView>
        <Indexer title="Últimas Notícias" data={newsMockData} />
      </ScrollView>
    </Container>
  );
};

export default NewsScreen;
