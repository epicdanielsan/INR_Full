import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import CustomCarousel from "../../components/Carousel";
import { Container } from "../../components/Container";
import Highlights from "../../components/Highlights";
import Colors from "../../constants/Colors";
import styles from "./styles";

const HomeScreen = () => {
  const navigation = useNavigation();

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
