import { Dimensions } from "react-native";
import { Container } from "../../components/Container";
import Highlights from "../../components/Highlights";
import highlightData from "../../components/Highlights/highlightData";

const HighlightsScreen = () => {
  const highlightDataLength = highlightData.length;
  return (
    <Container>
      <Highlights
        numberOfHighlights={highlightDataLength}
        minHeight={Dimensions.get("window").height}
      />
    </Container>
  );
};

export default HighlightsScreen;
