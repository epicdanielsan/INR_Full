import { decode } from "html-entities";
import { useContext } from "react";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import RenderHTML from "react-native-render-html";
import Colors from "../../constants/Colors";
import { AuthContext } from "../../contexts/AuthenticationContext";

type legislationItemProps = {
  item: any;
};

const LegislationItem = (props: legislationItemProps) => {
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
          <Text style={styles.ementa}>Ementa</Text>

          <RenderHTML
            contentWidth={width}
            source={{ html: decode(props.item.resumo) }}
            baseStyle={styles.text}
          />
          <View style={styles.hr}></View>
          <RenderHTML
            contentWidth={width}
            source={{ html: decode(props.item.texto) }}
            baseStyle={styles.text}
          />
          {props.item.comentario && (
            <View>
              <View style={styles.hr}></View>
              <Text style={styles.ementa}>Nota(s) da Redação INR</Text>
              <RenderHTML
                contentWidth={width}
                source={{ html: decode(props.item.comentario) }}
                baseStyle={styles.text}
              />
            </View>
          )}
          <Text style={styles.informative}>
            O conteúdo deste ato é coincidente com aquele publicado
            oficialmente. Eventuais alterações posteriores em seu objeto, ou sua
            revogação, não são consideradas, isto é, este ato permanecerá, na
            Base de Dados INR, tal qual veio ao mundo jurí­dico, ainda que,
            posteriormente, alterado ou revogado.
          </Text>
        </View>
      )}
    </View>
  );
};

export default LegislationItem;

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
