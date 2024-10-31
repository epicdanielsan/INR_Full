import { decode } from "html-entities";
import { useContext } from "react";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import RenderHTML from "react-native-render-html";
import Colors from "../../constants/Colors";
import { AuthContext } from "../../contexts/AuthenticationContext";

type legalViewItemProps = {
  item: any;
};

const LegalViewItem = (props: legalViewItemProps) => {
  const authContext = useContext(AuthContext);
  const { width } = useWindowDimensions();

  return (
    <View>
      {!authContext.isLoggedIn ? (
        <Text style={styles.unloggedText}>
          Este conteúdo é exclusivo para assinantes do INR. Clique no botão
          acima para entrar e visualizar este conteúdo.
        </Text>
      ) : (
        <View>
          <RenderHTML
            contentWidth={width}
            source={{ html: decode(props.item.ementa) }}
            baseStyle={styles.title}
          />

          <RenderHTML
            contentWidth={width}
            source={{ html: decode(props.item.texto) }}
            baseStyle={styles.text}
          />
        </View>
      )}
    </View>
  );
};

export default LegalViewItem;

const styles = StyleSheet.create({
  unloggedText: {
    fontSize: 17,
  },
  title: {
    marginLeft: 15,
    marginVertical: 5,
    color: Colors.primary.title,
    fontSize: 17,
    fontWeight: "500",
  },
  ementa: {
    fontWeight: "bold",
    fontSize: 17,
  },
  text: {
    fontSize: 15,
  },
  hr: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  informative: {
    fontSize: 15,
    marginBottom: 20,
  },
});
