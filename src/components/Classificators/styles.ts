import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: "center",
    color: Colors.primary.title,
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
  },
  bar: {
    textAlign: "center",
    marginVertical: 15,
    marginHorizontal: 5,
    padding: 10,
    color: "#fff",
  },
  organTitle: {
    textAlign: "center",
    fontWeight: "bold",
  },
  departmentTitle: {
    textAlign: "center",
    fontWeight: "500",
  },
  date: {
    marginLeft: 20,
    fontWeight: "400",
  },
});

export default styles;
