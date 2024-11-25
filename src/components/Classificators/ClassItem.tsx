import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { decode } from "html-entities";
import { useEffect, useState } from "react";
import { Text, useWindowDimensions, View } from "react-native";
import RenderHTML from "react-native-render-html";
import Colors from "../../constants/Colors";
import { asyncUser } from "../../lib/types";

type classItemProps = {
  id: number;
};

type actType = {
  secao: string | null;
  especie: string | null;
  numero?: string;
  vara: string | null;
  comarca: string;
  texto: string;
};

const ClassItem = (props: classItemProps) => {
  const { width } = useWindowDimensions();
  const [isLoading, setIsloading] = useState<boolean>(true);

  const [item, setItem] = useState<actType>({
    comarca: "",
    especie: null,
    secao: null,
    texto: "",
    vara: null,
    numero: "",
  });

  useEffect(() => {
    const init = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("user");
        const parsedValue: asyncUser =
          jsonValue != null ? JSON.parse(jsonValue) : null;
        if (parsedValue.userToken) {
          const fetchResponse = await axios.get(
            `https://api.legacy.publicacoesinr.com.br/classifiers/act-content?id=${props.id}`,
            {
              headers: {
                Authorization: parsedValue.userToken,
              },
            }
          );
          if (fetchResponse.data.success) {
            setItem(fetchResponse.data.data);
          }
        }
      } catch (error: any) {
        console.warn(error.message);
      } finally {
        setIsloading(false);
      }
    };
    init();
  }, []);

  if (isLoading) {
    return <Text style={{ color: Colors.primary.title }}>Carregando...</Text>;
  }

  if (item && item.texto) {
    return (
      <View>
        <RenderHTML
          contentWidth={width}
          source={{
            html: decode(item.texto),
          }}
          baseStyle={{ marginHorizontal: 5 }}
        />
      </View>
    );
  }
};

export default ClassItem;
