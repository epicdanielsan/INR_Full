import { useNavigation } from "@react-navigation/native";
import { decode } from "html-entities";
import { useContext } from "react";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import RenderHTML from "react-native-render-html";
import Colors from "../../constants/Colors";
import { AuthContext } from "../../contexts/AuthenticationContext";

type editorsMessageItemProps = {
  item: any;
};

const SuplementsItem = (props: editorsMessageItemProps) => {
  const { width } = useWindowDimensions();
  const authContext = useContext(AuthContext);
  const navigation = useNavigation();

  console.log(props.item);

  return (
    <View>
      <RenderHTML
        contentWidth={width}
        source={{ html: decode(props.item.titulo) }}
        baseStyle={styles.title}
      />

      {authContext.isLoggedIn ? (
        <View>
          <Text style={styles.subtitle}>Data da Última Atualização</Text>
          <Text style={styles.text}>{props.item.datacad}</Text>
          <RenderHTML
            contentWidth={width}
            source={{ html: decode(props.item.texto) }}
            baseStyle={styles.text}
          />
        </View>
      ) : (
        <RenderHTML
          contentWidth={width}
          source={{ html: decode(props.item.introducao) }}
          baseStyle={styles.text}
        />
      )}
    </View>
  );
};

export default SuplementsItem;

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
  subtitle: {
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
  warning: {
    fontSize: 17,
    fontWeight: "bold",
    color: Colors.primary.dark,
  },
});
