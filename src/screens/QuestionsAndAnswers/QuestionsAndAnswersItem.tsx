import { useNavigation } from "@react-navigation/native";
import { decode } from "html-entities";
import { useContext, useEffect } from "react";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import RenderHTML from "react-native-render-html";
import Colors from "../../constants/Colors";
import { AuthContext } from "../../contexts/AuthenticationContext";

type questionsAndAnswersItemProps = {
  item: any;
};

const QuestionsAndAnswersItem = (props: questionsAndAnswersItemProps) => {
  const { width } = useWindowDimensions();
  const authContext = useContext(AuthContext);
  const navigation = useNavigation();

  useEffect(() => {
    console.log(props.item);
  }, []);

  return (
    <View>
      <RenderHTML
        contentWidth={width}
        source={{ html: decode(props.item.titulo) }}
        baseStyle={styles.title}
      />
      <Text style={styles.subtitle}>Número da Pergunta</Text>
      <Text style={styles.text}>{props.item.numero_pergunta}</Text>
      <Text style={styles.subtitle}>Data de Registro</Text>
      <Text style={styles.text}>{props.item.datacad}</Text>
      <Text style={styles.subtitle}>Pergunta</Text>

      <RenderHTML
        contentWidth={width}
        source={{ html: decode(props.item.pergunta) }}
        baseStyle={styles.text}
      />
      <Text style={styles.subtitle}>Resposta/Aspectos/Argumentos</Text>
      {!authContext.isLoggedIn ? (
        <View>
          <RenderHTML
            contentWidth={width}
            source={{ html: decode(props.item.texto_parcial) }}
            baseStyle={styles.text}
          />
          <Text style={styles.warning}>
            Para continuar lendo este conteúdo, por favor, clique no botão acima
            para <Text style={{ color: Colors.primary.title }}>ENTRAR</Text>
          </Text>
        </View>
      ) : (
        <View>
          <RenderHTML
            contentWidth={width}
            source={{ html: decode(props.item.resposta) }}
            baseStyle={styles.text}
          />
        </View>
      )}
      {props.item.comentario && authContext.isLoggedIn && (
        <View style={{ marginBottom: 20 }}>
          <View style={styles.hr}></View>
          <Text style={styles.subtitle}>Nota(s) da Redação INR</Text>
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

export default QuestionsAndAnswersItem;

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
  hr: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});
