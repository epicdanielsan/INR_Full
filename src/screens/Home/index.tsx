import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import CustomCarousel from "../../components/Carousel";
import { Container } from "../../components/Container";
import Highlights from "../../components/Highlights";
import Colors from "../../constants/Colors";
import styles from "./styles";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [banners, setBanners] = useState<any[]>([]);
  const [destaques, setDestaques] = useState<any[]>([]);

  //Buscar os banners na API
  const initialSetup = async () => {
    try {
      const banners = await axios.get("/api/banners/active");
      const destaques = await axios.get(`/api/destaques/${5}`);

      if (banners.data) {
        setBanners(banners.data.banners);
      }
      if (destaques.data) {
        setDestaques(banners.data.destaques);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    initialSetup();
  }, []);

  return (
    <Container backgroundColor={Colors.primary.background}>
      <CustomCarousel />
      <View style={styles.highlightContainer}>
        <Text style={styles.highlightTitle}>Destaques</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Destaques" as never);
          }}
        >
          <Text style={styles.seeAllTitle}>Ver Todos</Text>
        </TouchableOpacity>
      </View>
      <Highlights numberOfHighlights={5} minHeight={700} />
    </Container>
  );
};

export default HomeScreen;
