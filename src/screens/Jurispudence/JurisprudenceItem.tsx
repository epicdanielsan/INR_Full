import { decode } from "html-entities";
import { useContext } from "react";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import RenderHTML from "react-native-render-html";
import Colors from "../../constants/Colors";
import { AuthContext } from "../../contexts/AuthenticationContext";

type jurisprudenceItemProps = {
  item: any;
};

const JurisprudenceItem = (props: jurisprudenceItemProps) => {
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
            source={{ html: decode(props.item.titulo) }}
            baseStyle={styles.title}
          />
          <RenderHTML
            contentWidth={width}
            source={{ html: decode(props.item.ato) }}
            baseStyle={styles.text}
          />
          {props.item.dados_processo && (
            <View style={styles.dadosProcessoContainer}>
              <Text style={styles.dadosProcesso}>Dados do Processo:</Text>
              <RenderHTML
                contentWidth={width}
                source={{ html: decode(props.item.dados_processo) }}
                baseStyle={styles.text}
              />
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default JurisprudenceItem;

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
  text: {
    fontSize: 15,
  },
  hr: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  dadosProcessoContainer: {
    marginBottom: 30,
  },
  dadosProcesso: {
    fontSize: 15,
    fontWeight: "500",
  },
});
