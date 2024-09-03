import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RouteProp } from "@react-navigation/native";
import { ScrollView, Text, useWindowDimensions, View } from "react-native";
import RenderHtml from "react-native-render-html";
import { RootListType } from "../../navigation/root";
import { Container } from "../Container";
import barColors from "./barColors";
import { actsType, contentItem } from "./DateIndexer";
import Divisor from "./Divisor";
import styles from "./styles";

type MultipurposeScreenRouteProp = RouteProp<
  RootListType,
  "MultipurposeClassPage"
>;

type DateIndexerNavigationProp = DrawerNavigationProp<
  RootListType,
  "MultipurposeClassPage"
>;

interface MultipurposeScreenProps {
  route: MultipurposeScreenRouteProp;
  navigation: DateIndexerNavigationProp;
}

const MultipurposeClassPage = ({
  route,
  navigation,
}: MultipurposeScreenProps) => {
  const { classificador } = route.params;
  const { width } = useWindowDimensions();

  navigation.setOptions({
    drawerLabel: `Classificador ${classificador.type}`,
    title: `Classificador ${classificador.type}`,
  });

  return (
    <Container>
      <ScrollView>
        {classificador && (
          <Text style={styles.title}>
            Classificadores INR {classificador.type} - {classificador.date}
          </Text>
        )}
        <Text style={styles.indexTitle}>Índice</Text>
        {classificador &&
          classificador.content.map((item: contentItem, index: number) => (
            <View key={index} style={styles.container}>
              <Text style={styles.barTitle}>{item.bar}</Text>
              <Text style={{ left: 10 }}>{item.organ}</Text>
              <Text style={{ left: 20 }}>{item.department}</Text>
              {item.acts &&
                item.acts.map((item, index) => (
                  <View>
                    <Text style={{ left: 25 }}>{item.title}</Text>
                  </View>
                ))}
            </View>
          ))}
        {classificador &&
          classificador.content.map((item: contentItem, index: number) => (
            <View key={index}>
              <Text style={[styles.bar, { backgroundColor: barColors[index] }]}>
                {item.bar}
              </Text>
              <Text style={styles.organTitle}>{item.organ}</Text>
              <Text style={styles.departmentTitle}>{item.department}</Text>
              <Text style={styles.date}>{classificador.date}</Text>
              {item.acts &&
                item.acts.map((item1: actsType, index) => {
                  console.log(item.acts.length);

                  return (
                    <View style={{ marginHorizontal: 5 }}>
                      <Text style={{ fontWeight: "500" }}>{item1.title}</Text>
                      {item1.species && <Text>Espécie: {item1.species}</Text>}
                      {item1.number && <Text>Número: {item1.number}</Text>}
                      {item1.county && <Text>Comarca: {item1.county}</Text>}

                      <RenderHtml contentWidth={width} source={item1} />
                      {index < item.acts.length - 1 && <Divisor />}
                    </View>
                  );
                })}
            </View>
          ))}
      </ScrollView>
    </Container>
  );
};

export default MultipurposeClassPage;
