import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { Container } from "../../components/Container";
import Indexer from "../../components/Indexer";
import Colors from "../../constants/Colors";
import { RootListType } from "../../navigation/root";

type editorsMessagesScreenNavigationProp = NativeStackNavigationProp<
  RootListType,
  "EditorsMessages"
>;

interface editorsMessagesScreenProps {
  navigation: editorsMessagesScreenNavigationProp;
}

const EditorsMessagesScreen = ({ navigation }: editorsMessagesScreenProps) => {
  const [editorsMessages, setEditorsMessages] = useState<any[]>([]);
  const [limit, setLimit] = useState<number>(5);
  const [page, setPage] = useState<number>(0);

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        try {
          const editorsMessagesResponse = await axios.get(
            `https://api.legacy.publicacoesinr.com.br/messages-editors?limit=${limit}&page=${page}`
          );
          if (editorsMessagesResponse.data.success) {
            setEditorsMessages(editorsMessagesResponse.data.data);
          }
        } catch (error: any) {
          console.log(error.message);
        }
      };

      fetchData();
    }, [limit, page])
  );

  useEffect(() => {
    const initialSetup = async () => {
      try {
        const editorsMessagesResponse = await axios.get(
          `https://api.legacy.publicacoesinr.com.br/messages-editors?limit=${limit}&page=${page}`
        );
        if (editorsMessagesResponse.data.success) {
          setEditorsMessages(() => editorsMessagesResponse.data.data);
        }
      } catch (error: any) {
        console.log(error.message);
      }
    };
    initialSetup();
  }, []);

  const loadMoreEditorsMessages = async () => {
    try {
      const newLimit = limit + 5;
      const editorsMessagesResponse = await axios.get(
        `https://api.legacy.publicacoesinr.com.br/messages-editors?limit=${newLimit}&page=${page}`
      );
      if (editorsMessagesResponse.data.success) {
        setEditorsMessages((prev) => [
          ...prev,
          ...editorsMessagesResponse.data.data,
        ]);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <Container>
      <ScrollView style={{ flex: 1 }}>
        <Indexer
          data={editorsMessages}
          title="Últimas Mensagens"
          onPress={(item1: any) => {
            navigation.navigate("Multipurpose", {
              item: {
                id: item1.idjurisprudencia,
                label: "Mensagens dos Editores",
                tipo: "messages-editors",
              },
            });
          }}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={loadMoreEditorsMessages}
        >
          <Text style={styles.buttonText}>Clique Aqui para ver mais</Text>
        </TouchableOpacity>
      </ScrollView>
    </Container>
  );
};

export default EditorsMessagesScreen;

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
});
