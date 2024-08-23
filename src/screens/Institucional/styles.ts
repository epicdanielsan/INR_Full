import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginVertical: 10,
    fontSize: 25,
    fontWeight: "500",
    color: Colors.primary.dark,
  },
  subtitle: {
    fontSize: 18,
    color: Colors.primary.light,
  },
  paragraphContainer: {
    alignItems: "flex-start",
    textAlign: "left",
  },
  paragraph: {
    marginLeft: 5,
  },
  boldText: {
    fontWeight: "bold",
  },
});

export default styles;
