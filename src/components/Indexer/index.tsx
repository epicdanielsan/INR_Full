import { Text, TouchableOpacity, View } from "react-native";
import styles from "./style";

export type indexerDataItem = {
  id: number;
  type: string;
  date: string;
  title: string;
  ementa?: string;
};

export type indexerProps = {
  title: string;
  data: indexerDataItem[];
};

const Indexer = (props: indexerProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      {props.data &&
        props.data.map((item, index) => (
          <TouchableOpacity key={index} style={styles.itemContainer}>
            <Text style={styles.item}>
              {item.date} - {item.title} {item.ementa ? `- ${item.ementa}` : ""}
            </Text>
          </TouchableOpacity>
        ))}
    </View>
  );
};

export default Indexer;
