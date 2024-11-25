import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: "center",
    color: Colors.primary.dark,
  },
  indexTitle: {
    fontSize: 20,
    marginLeft: 15,
    marginVertical: 15,
  },
  container: {
    marginLeft: 15,
  },
  barTitle: {
    color: Colors.primary.title,
    marginBottom: 10,
  },
  bar: {
    textAlign: "center",
    marginVertical: 15,
    marginHorizontal: 5,
    padding: 10,
    color: "#fff",
  },
  organTitle: {
    textAlign: "left",
    fontWeight: "500",
    marginLeft: 20,
  },
  departmentTitle: {
    textAlign: "center",
    color: Colors.primary.dark,
    fontWeight: "500",
  },
  date: {
    marginLeft: 20,
    fontWeight: "400",
  },
  notLoggedMessage: {
    fontSize: 20,
    marginHorizontal: 10,
    textAlign: "center",
    marginVertical: 10,
  },
  button: {
    marginHorizontal: 10,
  },
  text: {
    marginHorizontal: 5,
  },
});

export default styles;
