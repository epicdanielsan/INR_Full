import { useNavigation } from "@react-navigation/native";
import { decode } from "html-entities";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import RenderHTML from "react-native-render-html";
import styles from "./styles";

type highlightsProps = {
  data: any;
  numberOfHighlights: number;
  minHeight: number;
  onPress?: () => void;
};

const Highlights = (props: highlightsProps) => {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();

  return (
    <ScrollView contentContainerStyle={{ minHeight: props.minHeight }}>
      {props.data &&
        props.data
          .slice(0, props.numberOfHighlights)
          .map((item: any, index: number) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                navigation.navigate("Multipurpose" as never);
              }}
            >
              <View style={styles.highlightContainer}>
                <View style={{ flex: 3 }}>
                  <RenderHTML
                    contentWidth={width}
                    source={{
                      html: decode(item.content[0].titulo, { level: "html5" }),
                    }}
                    baseStyle={styles.highlightTitle}
                  />
                </View>
                <View style={{ flex: 1, marginLeft: 25 }}>
                  <Image
                    source={{ uri: `${item.content[0].img}` }}
                    style={{ height: 90, width: 90, borderRadius: 5 }}
                  />
                </View>
              </View>
            </TouchableOpacity>
          ))}
      {props.onPress && (
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={props.onPress}
        >
          <Text style={styles.buttonText}>Clique Aqui para ver mais</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

export default Highlights;
