import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/Colors";

export type actsType = {
  title: string;
  species?: string;
  county?: string;
  number?: string;
  ementa?: any;
  html: any;
};

export type contentItem = {
  bar: string;
  organ: string;
  department: string;
  acts: actsType[];
};

export type itemProps = {
  id: number;
  date: string;
  route: string;
  type: string;
  content?: contentItem[];
};

export interface dateIndexerProps {
  data: itemProps[];
  onPress: (item: any) => void;
}

const DateIndexer = (props: dateIndexerProps) => {
  return (
    <View>
      {props.data &&
        props.data.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.touchable}
            onPress={() => {
              props.onPress && props.onPress(item);
            }}
          >
            <Text style={styles.item}>{item.date}</Text>
          </TouchableOpacity>
        ))}
    </View>
  );
};

export default DateIndexer;

const styles = StyleSheet.create({
  touchable: {
    marginLeft: 15,
  },
  item: {
    fontSize: 20,
    marginVertical: 10,
    color: Colors.primary.title,
  },
});
