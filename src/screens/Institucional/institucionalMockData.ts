import { StyleSheet } from "react-native";
import { IconSubtitledProps } from "../../components/IconSubtitled";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: Colors.primary.light,
  },
});

const institucionalMockData: IconSubtitledProps[] = [
  {
    iconName: "newspaper",
    name: "FontAwesome5",
    title: "Notícias",
    color: Colors.primary.dark,
    size: 40,
    titleStyle: styles.title,
  },
  {
    iconName: "gavel",
    name: "MaterialCommunityIcons",
    title: "Jurisprudência",
    color: Colors.primary.dark,
    size: 40,
    titleStyle: styles.title,
  },
  {
    iconName: "law",
    name: "Octicons",
    title: "Legislação",
    color: Colors.primary.dark,
    size: 40,
    titleStyle: styles.title,
  },
  {
    iconName: "quote",
    name: "Foundation",
    title: "Opinião",
    color: Colors.primary.dark,
    size: 40,
    titleStyle: styles.title,
  },
];

export default institucionalMockData;
