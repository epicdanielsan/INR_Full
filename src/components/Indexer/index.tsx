import { decode } from "html-entities";
import { useEffect } from "react";
import {
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import RenderHTML from "react-native-render-html";
import styles from "./style";

export type indexerDataItem = {
  id: number;
  tipo: string;
  datacad: string;
  titulo: string;
  ementa?: string;
  label: string;
};

export type indexerProps = {
  title: string;
  data: indexerDataItem[];
  onPress: (item: indexerDataItem) => void;
};

const Indexer = (props: indexerProps) => {
  const { width } = useWindowDimensions();

  useEffect(() => {}, []);

  return (
    <View style={styles.itemView}>
      <Text style={styles.screenTitle}>{props.title}</Text>
      {props.data &&
        props.data.map((item: indexerDataItem, index) => (
          <TouchableOpacity onPress={() => props.onPress(item)} key={index}>
            <View style={styles.titleContainer}>
              <Text
                numberOfLines={5}
                ellipsizeMode={"tail"}
                style={styles.itemDate}
              >
                {item.datacad} -
              </Text>
              <RenderHTML
                contentWidth={width}
                source={{
                  html: decode(item.titulo),
                }}
                baseStyle={styles.itemText}
              />
            </View>
          </TouchableOpacity>
        ))}
    </View>
  );
};

export default Indexer;
