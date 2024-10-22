import { decode } from "html-entities";
import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import RenderHTML from "react-native-render-html";
import Colors from "../../constants/Colors";

type newsItemProps = {
  item: any;
};

const NewsItem = (props: newsItemProps) => {
  const { width } = useWindowDimensions();

  return (
    <View>
      <RenderHTML
        contentWidth={width}
        source={{ html: decode(props.item.titulo) }}
        baseStyle={styles.title}
      />
      {props.item.chamada && (
        <RenderHTML
          contentWidth={width}
          source={{ html: decode(props.item.chamada) }}
          baseStyle={styles.title}
        />
      )}
      <RenderHTML
        contentWidth={width}
        source={{ html: decode(props.item.datacad) }}
        baseStyle={styles.title}
      />
      <RenderHTML
        contentWidth={width}
        source={{ html: decode(props.item.texto) }}
        baseStyle={styles.text}
      />
      {props.item.fonte && (
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(props.item.fonte);
          }}
          style={styles.fonteContainer}
        >
          <Text style={styles.fonte}>{props.item.fonte}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  title: {
    marginLeft: 15,
    marginVertical: 5,
    color: Colors.primary.title,
    fontSize: 17,
    fontWeight: "500",
  },
  text: {
    fontSize: 15,
  },
  fonteContainer: {
    marginVertical: 20,
  },
  fonte: {
    fontSize: 15,
    color: Colors.primary.light,
    fontWeight: "500",
  },
});
