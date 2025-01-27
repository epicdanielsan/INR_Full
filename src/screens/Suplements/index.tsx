import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import { decode } from "html-entities";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import RenderHTML from "react-native-render-html";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { Container } from "../../components/Container";
import Colors from "../../constants/Colors";
import { RootListType } from "../../navigation/root";
import SuplementsIntroduction from "./SuplementsIntroduction";

type suplementsScreenNavigationProp = NativeStackNavigationProp<
  RootListType,
  "Suplements"
>;

interface suplementsScreenProps {
  navigation: suplementsScreenNavigationProp;
}

const SuplementsScreen = ({ navigation }: suplementsScreenProps) => {
  const [suplementsTypes, setSuplementsTypes] = useState<any[]>([]);
  const [suplements, setSuplements] = useState<any[]>([]);
  const [limit, setLimit] = useState<number>(40);
  const [page, setPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);
  const { width } = useWindowDimensions();

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        try {
          //Pegar os tipos de suplementos
          const typesResponse = await axios.get(
            "https://api.legacy.publicacoesinr.com.br/supplements/themes/list"
          );

          if (typesResponse.data) {
            try {
              setSuplementsTypes(() => typesResponse.data.data);

              const suplementsResponse = await axios.get(
                `https://api.legacy.publicacoesinr.com.br/supplements?theme=${suplementsTypes[0].id}&limit=${limit}&page=${page}`
              );

              if (suplementsResponse.data) {
                setSelectedIndex(0);
                setSuplements(() => suplementsResponse.data.data);
              }
              setIsLoading(false);
            } catch (error: any) {
              console.warn(error.message);
            }
          } else {
            Alert.alert("Erro!!!", "Nenhum resultado encontrado.");
            setIsLoading(false);
            return;
          }
        } catch (error: any) {
          console.warn(error.message);
          setIsLoading(false);
        }
      };

      fetchData();
    }, [limit, page])
  );

  useEffect(() => {
    const initialSetup = async () => {
      setIsLoading(true);
      try {
        //Pegar os tipos de suplementos
        const typesResponse = await axios.get(
          "https://api.legacy.publicacoesinr.com.br/supplements/themes/list"
        );

        if (typesResponse.data) {
          try {
            setSuplementsTypes(() => typesResponse.data.data);

            const suplementsResponse = await axios.get(
              `https://api.legacy.publicacoesinr.com.br/supplements?theme=${suplementsTypes[0].id}&limit=${limit}&page=${page}`
            );

            if (suplementsResponse.data) {
              setSelectedIndex(0);
              setSuplements(() => suplementsResponse.data.data);
            }
            setIsLoading(false);
          } catch (error: any) {
            console.warn(error.message);
          }
        } else {
          Alert.alert("Erro!!!", "Nenhum resultado encontrado.");
          setIsLoading(false);
          return;
        }
      } catch (error: any) {
        console.warn(error.message);
        setIsLoading(false);
      }
    };
    initialSetup();
    setIsLoading(false);
  }, []);

  interface ButtonLabelItem {
    title: string;
  }

  const rows = suplementsTypes.reduce((acc, curr, index) => {
    if (index % 2 === 0) acc.push([]);
    acc[acc.length - 1].push(curr);
    return acc;
  }, [] as ButtonLabelItem[][]);

  const handlePress = async (id: number, index: number) => {
    setSelectedIndex(() => index);

    try {
      setIsLoading(true);
      const changeResponse = await axios.get(
        `https://api.legacy.publicacoesinr.com.br/supplements?theme=${id}&limit=${limit}&page=${page}`
      );
      if (changeResponse.data) {
        setSuplements(() => changeResponse.data.data);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        return;
      }
    } catch (error: any) {
      setIsLoading(false);
      console.warn(error.message);
    }
  };

  return (
    <Container>
      <ScrollView style={{ flex: 1 }}>
        <SuplementsIntroduction />
        <Text>{JSON.stringify(suplementsTypes)}</Text>
        <View style={styles.container}>
          {rows &&
            rows.length > 0 &&
            rows.map((row: any, rowIndex: number) => (
              <View key={rowIndex} style={styles.buttonsContainer}>
                {row &&
                  row.length > 0 &&
                  row.map((item: any, index: number) => {
                    const absoluteIndex = rowIndex * 2 + index;
                    return (
                      <TouchableOpacity
                        key={absoluteIndex}
                        style={[
                          styles.touchable,
                          selectedIndex === absoluteIndex &&
                            styles.selectedTouchable,
                        ]}
                        onPress={() => handlePress(item.id, absoluteIndex)}
                      >
                        <View style={{ flexDirection: "row" }}>
                          <Text style={styles.buttonTitle}>
                            {decode(item.titulo)}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
              </View>
            ))}
          {selectedIndex !== null && (
            <View style={styles.contentContainer}>
              {isLoading ? (
                <View style={styles.gifContainer}>
                  <Image
                    source={require("../../../assets/images/Loading.gif")}
                    style={styles.gif}
                  />
                </View>
              ) : (
                suplements.map((detail: any, index: number) => {
                  return (
                    <TouchableOpacity
                      style={styles.titleContainer}
                      onPress={() => {
                        navigation.navigate("Multipurpose", {
                          item: {
                            id: detail.id,
                            label: "Suplementos INR",
                            tipo: detail.tipo,
                          },
                        });
                      }}
                    >
                      <Text style={styles.title}>{detail.datacad_fmt} - </Text>
                      <RenderHTML
                        contentWidth={width}
                        source={{ html: decode(detail.titulo) }}
                        baseStyle={styles.title}
                      />
                    </TouchableOpacity>
                  );
                })
              )}
            </View>
          )}
        </View>
      </ScrollView>
    </Container>
  );
};

export default SuplementsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
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
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    marginHorizontal: 5,
    padding: 15,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: Colors.primary.dark,
    marginVertical: 10,
  },
  buttonTitle: {
    fontSize: 17,
    color: Colors.primary.title,
  },
  touchable: {
    marginHorizontal: 5,
    padding: 15,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: Colors.primary.dark,
    marginVertical: 10,
  },
  selectedTouchable: {
    backgroundColor: Colors.primary.dark,
  },
  contentContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  contentText: {
    fontSize: 16,
    color: Colors.primary.title,
    marginVertical: 10,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginVertical: 20,
  },
  title: {
    fontSize: 15,
    color: Colors.primary.title,
  },
});
