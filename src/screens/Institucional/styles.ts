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
    fontSize: 15,
    color: Colors.primary.light,
  },
  paragraphContainer: {
    alignItems: "flex-start",
    textAlign: "left",
    marginBottom: 50,
  },
  paragraph: {
    marginLeft: 10,
  },
  boldText: {
    fontWeight: "bold",
  },
  buttonsContainer: {
    // flexDirection: "row",
  },
  directorsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  directorsItem: {
    flex: 1,
    alignItems: "center",
  },
  directorsTitle: {
    marginVertical: 5,
    color: Colors.primary.light,
    fontSize: 15,
    textAlign: "center",
  },
  buttonItem: {
    marginVertical: 20,
  },
  itemTitle: {
    color: Colors.primary.title,
    fontSize: 16,
    fontWeight: "500",
  },
});

export default styles;
