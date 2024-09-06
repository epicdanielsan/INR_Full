import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RouteProp } from "@react-navigation/native";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { RootListType } from "../../navigation/root";
import { Container } from "../Container";
import { contentItem } from "./DateIndexer";
import styles from "./styles";

type IndexClassScreenRouteProp = RouteProp<RootListType, "IndexClassScreen">;

type IndexClassScreenNavigationProp = DrawerNavigationProp<
  RootListType,
  "IndexClassScreen"
>;

interface IndexClassScreenProps {
  route: IndexClassScreenRouteProp;
  navigation: IndexClassScreenNavigationProp;
}

const IndexClassScreen = ({ route, navigation }: IndexClassScreenProps) => {
  const { classificador } = route.params;

  navigation.setOptions({
    drawerLabel: `Classificador ${classificador.type}`,
    title: `Classificador ${classificador.type} `,
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
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("MultipurposeClassScreen", {
                    classificador: {
                      ...item,
                      type: classificador.type,
                      date: classificador.date,
                    },
                  });
                }}
              >
                <Text style={styles.barTitle}>{item.bar}</Text>
              </TouchableOpacity>
              <Text style={{ left: 10 }}>{item.organ}</Text>
              <Text style={{ left: 20 }}>{item.department}</Text>
              {item.acts &&
                item.acts.map((item, index1) => (
                  <View key={index1}>
                    <Text style={{ left: 25 }}>{item.title}</Text>
                  </View>
                ))}
            </View>
          ))}
      </ScrollView>
    </Container>
  );
};

export default IndexClassScreen;
