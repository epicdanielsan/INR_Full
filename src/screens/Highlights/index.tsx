import axios from "axios";
import { useEffect, useState } from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import { Container } from "../../components/Container";
import Highlights from "../../components/Highlights";

const HighlightsScreen = () => {
  const [highlightsToShow, setHighlightsToShow] = useState<number>(5);
  const [highlights, setHighlights] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  //Buscar os destaques na API
  const initialSetup = async () => {
    try {
      setIsLoading(true);
      const highlightsResponse = await axios.get(
        "https://api.legacy.publicacoesinr.com.br/home"
      );
      if (highlightsResponse.data) {
        setHighlights(() => highlightsResponse.data.data.links);
        setIsLoading(false);
      }
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      console.log(error.message);
    }
  };

  // Função para carregar mais destaques
  const loadMoreHighlights = async () => {
    if (isLoading) return;

    setIsLoading(true);

    setHighlightsToShow((prevHighlightsToShow) => prevHighlightsToShow + 5);

    setIsLoading(false);
  };

  useEffect(() => {
    initialSetup();
  }, []);

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
        highlights &&
        highlights.length > 0 && (
          <Highlights
            numberOfHighlights={highlightsToShow}
            minHeight={Dimensions.get("window").height}
            onPress={loadMoreHighlights}
            data={highlights}
          />
        )
      )}
    </Container>
  );
};

export default HighlightsScreen;

const styles = StyleSheet.create({
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
