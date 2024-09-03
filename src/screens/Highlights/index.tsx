import axios from "axios";
import { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { Container } from "../../components/Container";
import Highlights from "../../components/Highlights";
import highlightData from "../../components/Highlights/highlightData";

const HighlightsScreen = () => {
  const highlightDataLength = highlightData.length;
  const [take, setTake] = useState<number>(5);
  const [skip, setSkip] = useState<number>(0);
  const [highlights, setHighlights] = useState<any[]>([]);

  //Buscar os destaques na API
  const initialSetup = async () => {
    try {
      const highlightsResponse = await axios.post(`/api/highlights`, {
        take,
        skip,
      });
      if (highlightsResponse.data) {
        setHighlights(highlightsResponse.data);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  //Buscar mais destaques na API
  const loadMoreHighlights = async () => {
    const newSkip = skip + take;
    const highlightsResponse = await axios.post(`/api/highlights`, {
      take,
      newSkip,
    });

    if (highlightsResponse.data) {
      setHighlights((prev) => [...prev, highlightsResponse.data]);
    }
  };

  useEffect(() => {
    initialSetup();
  }, []);

  return (
    <Container>
      <Highlights
        numberOfHighlights={highlightDataLength}
        minHeight={Dimensions.get("window").height}
        onPress={loadMoreHighlights}
      />
    </Container>
  );
};

export default HighlightsScreen;
