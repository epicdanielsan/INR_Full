import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
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
import Indexer from "../../components/Indexer";
import Colors from "../../constants/Colors";
import { RootListType } from "../../navigation/root";

type questionsAndAnswersScreenNavigationProp = NativeStackNavigationProp<
  RootListType,
  "QuestionsAndAnswers"
>;

interface questionsAndAnswersScreenProps {
  navigation: questionsAndAnswersScreenNavigationProp;
}

const QuestionsAndAnswersScreen = ({
  navigation,
}: questionsAndAnswersScreenProps) => {
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState<any[]>([]);
  const [limit, setLimit] = useState<number>(5);
  const [page, setPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        try {
          setIsLoading(true);
          const questionsAndAnswersResponse = await axios.get(
            `https://api.legacy.publicacoesinr.com.br/questions-answers?limit=${limit}&page=${page}`
          );
          if (questionsAndAnswersResponse.data.success) {
            setQuestionsAndAnswers(questionsAndAnswersResponse.data.data);
            setPage(() => 0);
          }
          setIsLoading(false);
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
      try {
        setIsLoading(true);
        const questionsAndAnswersResponse = await axios.get(
          `https://api.legacy.publicacoesinr.com.br/questions-answers?limit=${limit}&page=${page}`
        );
        if (questionsAndAnswersResponse.data.success) {
          setQuestionsAndAnswers(() => questionsAndAnswersResponse.data.data);
        }
        setIsLoading(false);
      } catch (error: any) {
        console.warn(error.message);
        setIsLoading(false);
      }
    };
    initialSetup();
  }, []);

  const loadMoreQuestionsAndAnswers = async () => {
    try {
      setIsLoading(true);
      const newPage = page + 1;
      setPage(() => newPage);
      const questionsAndAnswersResponse = await axios.get(
        `https://api.legacy.publicacoesinr.com.br/questions-answers?limit=${limit}&page=${newPage}`
      );
      if (questionsAndAnswersResponse.data.success) {
        setQuestionsAndAnswers((prev) => [
          ...prev,
          ...questionsAndAnswersResponse.data.data,
        ]);
      }
      setIsLoading(false);
    } catch (error: any) {
      console.warn(error.message);
      setIsLoading(false);
    }
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
          <Indexer
            data={questionsAndAnswers}
            title="Últimas Consultas"
            onPress={(item1: any) => {
              navigation.navigate("Multipurpose", {
                item: {
                  id: item1.id,
                  label: "Perguntas e Respostas",
                  tipo: "questions-answers",
                },
              });
            }}
          />
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={loadMoreQuestionsAndAnswers}
          >
            <Text style={styles.buttonText}>Clique Aqui para ver mais</Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </Container>
  );
};

export default QuestionsAndAnswersScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 80,
    borderColor: Colors.primary.dark,
    borderWidth: 2,
    borderRadius: 5,
    padding: 15,
  },
  buttonText: {
    fontSize: 18,
    color: Colors.primary.light,
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
});
