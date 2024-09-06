import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RouteProp } from "@react-navigation/native";
import { useRef } from "react";
import { ScrollView, Text, useWindowDimensions, View } from "react-native";
import RenderHTML from "react-native-render-html";
import { RootListType } from "../../navigation/root";
import BackToTopButton from "../BackToTopButton";
import { Container } from "../Container";
import barColors from "./barColors";
import { actsType } from "./DateIndexer";
import Divisor from "./Divisor";
import styles from "./styles";

type MultipurposeClassScreenRouteProp = RouteProp<
  RootListType,
  "MultipurposeClassScreen"
>;

type MultipurposeClassScreenNavigationProp = DrawerNavigationProp<
  RootListType,
  "MultipurposeClassScreen"
>;

interface MultipurposeClassScreenProps {
  route: MultipurposeClassScreenRouteProp;
  navigation: MultipurposeClassScreenNavigationProp;
}

const MultipurposeClassScreen = ({
  navigation,
  route,
}: MultipurposeClassScreenProps) => {
  const { classificador } = route.params;
  const { width } = useWindowDimensions();

  navigation.setOptions({
    drawerLabel: `Classificador ${classificador.type}`,
    title: `${classificador.type} - ${classificador.date}`,
  });

  const scrollViewRef = useRef<ScrollView>(null);

  const scrollToTop = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        y: 0,
        animated: true,
      });
    }
  };

  const randomIndex = Math.floor(Math.random() * barColors.length);

  return (
    <Container>
      <ScrollView ref={scrollViewRef}>
        {classificador && (
          <Text
            style={[styles.bar, { backgroundColor: barColors[randomIndex] }]}
          >
            {classificador.bar}
          </Text>
        )}
        {classificador.acts &&
          classificador.acts.map((item1: actsType, index1: number) => (
            <View style={{ marginHorizontal: 5 }} key={index1}>
              <Text style={{ fontWeight: "500" }}>{item1.title}</Text>
              {item1.species && <Text>Espécie: {item1.species}</Text>}
              {item1.number && <Text>Número: {item1.number}</Text>}
              {item1.county && <Text>Comarca: {item1.county}</Text>}

              <RenderHTML contentWidth={width} source={item1} />
              {index1 < classificador.acts.length - 1 && <Divisor />}
            </View>
          ))}

        <BackToTopButton onPress={scrollToTop} />
      </ScrollView>
    </Container>
  );
};

export default MultipurposeClassScreen;
