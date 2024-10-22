import { useNavigation } from "@react-navigation/native";
import { decode } from "html-entities";
import { useContext } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import RenderHTML from "react-native-render-html";
import Colors from "../../constants/Colors";
import { AuthContext } from "../../contexts/AuthenticationContext";

type opinionItemProps = {
  item: any;
};

const OpinionItem = (props: opinionItemProps) => {
  const { width } = useWindowDimensions();
  const authContext = useContext(AuthContext);
  const navigation = useNavigation();

  return (
    <View>
      <RenderHTML
        contentWidth={width}
        source={{ html: decode(props.item.titulo) }}
        baseStyle={styles.title}
      />
      {!authContext.isLoggedIn && (
        <View>
          <RenderHTML
            contentWidth={width}
            source={{ html: decode(props.item.introducao) }}
            baseStyle={styles.text}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LogIn" as never);
            }}
          >
            <Text style={styles.title}>-Continuar Lendo...</Text>
          </TouchableOpacity>
        </View>
      )}
      {authContext.isLoggedIn && (
        <RenderHTML
          contentWidth={width}
          source={{ html: decode(props.item.texto) }}
          baseStyle={styles.text}
        />
      )}

      <Text style={styles.authorName}>{props.item.autores.nome}</Text>
      <RenderHTML
        contentWidth={width}
        source={{ html: decode(props.item.autores.curriculo) }}
        baseStyle={styles.text}
      />
      {props.item.comentario && (
        <View>
          <Text style={styles.notes}>Nota(s) da Redação INR</Text>
          <RenderHTML
            contentWidth={width}
            source={{ html: decode(props.item.comentario) }}
            baseStyle={styles.text}
          />
        </View>
      )}
    </View>
  );
};

export default OpinionItem;

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
  authorName: {
    fontSize: 17,
    color: Colors.primary.dark,
    marginVertical: 10,
    fontWeight: "500",
  },
  notes: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 5,
  },
});
