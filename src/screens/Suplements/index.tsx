import { useFocusEffect } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
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
  const [suplements, setSuplements] = useState<any[]>([]);
  const [limit, setLimit] = useState<number>(5);
  const [page, setPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        try {
          // setIsLoading(true);
          // const suplementsResponse = await axios.get(
          //   `https://api.legacy.publicacoesinr.com.br/suplements?limit=${limit}&page=${page}`
          // );
          // if (suplementsResponse.data.success) {
          //   setSuplements(suplementsResponse.data.data);
          //   setPage(() => 0);
          // }
          // setIsLoading(false);
        } catch (error: any) {
          console.log(error.message);
          setIsLoading(false);
        }
      };

      fetchData();
    }, [limit, page])
  );

  useEffect(() => {
    const initialSetup = async () => {
      try {
        // setIsLoading(true);
        // const suplementsResponse = await axios.get(
        //   `https://api.legacy.publicacoesinr.com.br/suplements?limit=${limit}&page=${page}`
        // );
        // if (suplementsResponse.data.success) {
        //   setSuplements(() => suplementsResponse.data.data);
        // }
        // setIsLoading(false);
      } catch (error: any) {
        console.log(error.message);
        setIsLoading(false);
      }
    };
    initialSetup();
  }, []);

  const loadMoreSuplements = async () => {
    try {
      // setIsLoading(true);
      // const newPage = page + 1;
      // setPage(() => newPage);
      // const suplementsResponse = await axios.get(
      //   `https://api.legacy.publicacoesinr.com.br/suplements?limit=${limit}&page=${newPage}`
      // );
      // if (suplementsResponse.data.success) {
      //   setSuplements((prev) => [...prev, ...suplementsResponse.data.data]);
      // }
      // setIsLoading(false);
    } catch (error: any) {
      console.log(error.message);
      setIsLoading(false);
    }
  };

  interface ButtonLabelItem {
    title: string;
  }

  const buttonsLabels = [
    {
      title: "Tributário",
      content: [
        "15/12/2023 – CND conjunta – Atual regime jurídico.",
        "24/11/2021 – CNPJ – Aquisição de veículo em nome do `cartório`.",
        "15/12/2023 – CND conjunta – Atual regime jurídico.",
        "24/11/2021 – CNPJ – Aquisição de veículo em nome do `cartório`.",
        "15/12/2023 – CND conjunta – Atual regime jurídico.",
        "24/11/2021 – CNPJ – Aquisição de veículo em nome do `cartório`.",
        "15/12/2023 – CND conjunta – Atual regime jurídico.",
        "24/11/2021 – CNPJ – Aquisição de veículo em nome do `cartório`.",
      ],
    },
    {
      title: "Trabalhista",
      content: [
        "27/03/2023 – Direitos da empregada lactante.",
        "03/02/2022 – Efeméride de Carnaval",
      ],
    },
    {
      title: "Previdenciário",
      content: [
        "22/01/2024 – Contribuição Previdenciária pessoal de Notários e Registradores.",
        "22/01/2024 – Salário-família – Manutenção – Apresentação de documentos.",
      ],
    },
    {
      title: "Geral",
      content: [
        "16/02/2018 – Cadastros de Notários e Registradores (CNPJ, CPF e CEI).",
        "26/04/2018 – Tempo de guarda de documentos.",
      ],
    },
  ];

  const rows = buttonsLabels.reduce((acc, curr, index) => {
    if (index % 2 === 0) acc.push([]);
    acc[acc.length - 1].push(curr);
    return acc;
  }, [] as ButtonLabelItem[][]);

  const handlePress = (index: number) => {
    setSelectedIndex(index);
  };

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
        <ScrollView style={{ flex: 1 }}>
          {/* <Indexer
            data={suplements}
            title="Últimas Consultas"
            onPress={(item1: any) => {
              navigation.navigate("Multipurpose", {
                item: {
                  id: item1.id,
                  label: "Suplementos",
                  tipo: "suplements",
                },
              });
            }}
          /> */}
          {/* <TouchableOpacity
            style={styles.buttonContainer}
            onPress={loadMoreSuplements}
          >
            <Text style={styles.buttonText}>Clique Aqui para ver mais</Text>
          </TouchableOpacity> */}
          <SuplementsIntroduction />
          <View style={styles.container}>
            {rows.map((row, rowIndex) => (
              <View key={rowIndex} style={styles.buttonsContainer}>
                {row.map((item, index) => {
                  const absoluteIndex = rowIndex * 2 + index;
                  return (
                    <TouchableOpacity
                      key={absoluteIndex}
                      style={[
                        styles.touchable,
                        selectedIndex === absoluteIndex &&
                          styles.selectedTouchable,
                      ]}
                      onPress={() => handlePress(absoluteIndex)}
                    >
                      <Text style={styles.buttonTitle}>{item.title}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ))}
            {selectedIndex !== null && (
              <View style={styles.contentContainer}>
                {buttonsLabels[selectedIndex].content.map((detail, index) => (
                  <Text key={index} style={styles.contentText}>
                    {detail}
                  </Text>
                ))}
              </View>
            )}
          </View>
        </ScrollView>
      )}
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
});
