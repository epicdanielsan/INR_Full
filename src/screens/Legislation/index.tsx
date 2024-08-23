import { ScrollView } from "react-native";
import { Container } from "../../components/Container";
import Indexer from "../../components/Indexer";
import legislationMockData from "./legislationMockData";

const LegislationScreen = () => {
  return (
    <Container>
      <ScrollView>
        <Indexer title="Últimos Atos Legais" data={legislationMockData} />
      </ScrollView>
    </Container>
  );
};

export default LegislationScreen;
