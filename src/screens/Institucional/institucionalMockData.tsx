import { Linking, StyleSheet, Text, TouchableOpacity } from "react-native";
import { IconSubtitledProps } from "../../components/IconSubtitled";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: Colors.primary.light,
  },
  paragraph: {
    marginLeft: 10,
    fontSize: 16,
    lineHeight: 25,
  },
  boldText: {
    fontWeight: "bold",
  },
});

const institucionalMockData: IconSubtitledProps[] = [
  {
    iconName: "newspaper",
    name: "FontAwesome5",
    title: "Notícias",
    color: Colors.primary.dark,
    size: 35,
    titleStyle: styles.title,
  },
  {
    iconName: "gavel",
    name: "MaterialCommunityIcons",
    title: "Jurisprudência",
    color: Colors.primary.dark,
    size: 35,
    titleStyle: styles.title,
  },
  {
    iconName: "law",
    name: "Octicons",
    title: "Legislação",
    color: Colors.primary.dark,
    size: 35,
    titleStyle: styles.title,
  },
  {
    iconName: "quote",
    name: "Foundation",
    title: "Opinião",
    color: Colors.primary.dark,
    size: 35,
    titleStyle: styles.title,
  },
  {
    iconName: "question",
    name: "FontAwesome",
    title: "Perguntas e Respostas",
    color: Colors.primary.dark,
    size: 35,
    titleStyle: styles.title,
  },
  {
    iconName: "message",
    name: "MaterialIcons",
    title: "Mensagens dos Editores",
    color: Colors.primary.dark,
    size: 35,
    titleStyle: styles.title,
  },
  {
    iconName: "flag",
    name: "FontAwesome",
    title: "Classificadores PR",
    color: Colors.primary.dark,
    size: 35,
    titleStyle: styles.title,
  },
  {
    iconName: "flag",
    name: "FontAwesome",
    title: "Classificadores SP",
    color: Colors.primary.dark,
    size: 35,
    titleStyle: styles.title,
  },
  {
    iconName: "flag",
    name: "FontAwesome",
    title: "Classificadores RS",
    color: Colors.primary.dark,
    size: 35,
    titleStyle: styles.title,
  },
  {
    iconName: "archive",
    name: "Entypo",
    title: "Arquivos Acumulados dos Classificadores SP",
    color: Colors.primary.dark,
    size: 35,
    titleStyle: styles.title,
  },
  {
    iconName: "legal",
    name: "FontAwesome",
    title: "Pareceres CGJ SP",
    color: Colors.primary.dark,
    size: 35,
    titleStyle: styles.title,
  },
  {
    iconName: "newspaper-sharp",
    name: "Ionicons",
    title: "Suplementos da Consultoria INR",
    color: Colors.primary.dark,
    size: 35,
    titleStyle: styles.title,
  },
];

const institucionalMockData2: IconSubtitledProps[] = [
  {
    iconName: "hands-helping",
    name: "FontAwesome5",
    title: "Consultoria",
    color: Colors.primary.dark,
    size: 35,
    titleStyle: styles.title,
  },
  {
    iconName: "graduation-cap",
    name: "FontAwesome5",
    title: "Cursos",
    color: Colors.primary.dark,
    size: 35,
    titleStyle: styles.title,
  },
  {
    iconName: "tv",
    name: "FontAwesome5",
    title: "TV INR",
    color: Colors.primary.dark,
    size: 35,
    titleStyle: styles.title,
  },
];

const directorsMockData = [
  {
    title: "Antônio Herance Filho",
    source: require("../../../assets/images/antonioHeranceFilho.jpg"),
    description: () => (
      <>
        <Text style={styles.paragraph}>
          Advogado e pós-graduado em Direito Processual Tributário pela
          Pontifícia Universidade Católica de São Paulo - PUC-SP, em Direito
          Notarial e Registral Imobiliário pela Pontifícia Universidade Católica
          de Minas Gerais - PUC-MG e em Direito Constitucional e de Contratos
          pelo Centro de Extensão Universitária de São Paulo. É professor de
          Direito Tributário aplicado às atividades notariais e de registro e
          autor de várias obras e artigos.
        </Text>
        <Text style={styles.paragraph}>
          É, ainda, coordenador tributário da{" "}
          <Text style={styles.boldText}>INR Contábil</Text> e da Consultoria INR
          e coeditor das <Text style={styles.boldText}>Publicações INR</Text>.
        </Text>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(`mailto: "herance@inr.com.br"`);
          }}
        >
          <Text
            style={[
              styles.paragraph,
              { color: "blue", marginVertical: 10, fontSize: 17 },
            ]}
          >
            herance@inr.com.br
          </Text>
        </TouchableOpacity>
      </>
    ),
  },
  {
    title: "Anderson Herance",
    source: require("../../../assets/images/andersonHerance.jpg"),
    description: () => (
      <>
        <Text style={styles.paragraph}>
          Advogado, pós-graduado em Direito da Família e Sucessões pelo Centro
          de Extensão Universitária de São Paulo, coordenador trabalhista da{" "}
          <Text style={styles.boldText}>INR Contábil</Text> e da{" "}
          <Text style={styles.boldText}>Consultoria INR</Text> e coeditor das
          <Text style={styles.boldText}> Publicações INR</Text>.
        </Text>

        <TouchableOpacity
          onPress={() => {
            Linking.openURL(`mailto: "andersonherance@inr.com.br"`);
          }}
        >
          <Text
            style={[
              styles.paragraph,
              { color: "blue", marginVertical: 10, fontSize: 17 },
            ]}
          >
            andersonherance@inr.com.br
          </Text>
        </TouchableOpacity>
      </>
    ),
  },
  {
    title: "Fernanda Mathias de Andrade Herance",
    source: require("../../../assets/images/fernandaHerance.jpeg"),
    description: () => (
      <>
        <Text style={styles.paragraph}>
          Advogada, especialista em Direito Tributário pela Pontifícia
          Universidade Católica de São Paulo - PUC-SP e pós-graduada em Direito
          da Família e Sucessões pelo Centro de Extensão Universitária de São
          Paulo.
        </Text>
        <Text style={styles.paragraph}>
          É, ainda, coeditora das{" "}
          <Text style={styles.boldText}> Publicações INR</Text>.
        </Text>

        <TouchableOpacity
          onPress={() => {
            Linking.openURL(`mailto: "fernanda@inr.com.br"`);
          }}
        >
          <Text
            style={[
              styles.paragraph,
              { color: "blue", marginVertical: 10, fontSize: 17 },
            ]}
          >
            fernanda@inr.com.br
          </Text>
        </TouchableOpacity>
      </>
    ),
  },
];

export { directorsMockData, institucionalMockData, institucionalMockData2 };
