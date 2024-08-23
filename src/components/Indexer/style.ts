import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
  },
  title: {
    color: Colors.primary.dark,
    fontSize: 25,
    fontWeight: "500",
    marginLeft: 25,
    marginVertical: 10,
  },
  itemContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 10,
  },
  item: {
    color: Colors.primary.light,
    fontWeight: "500",
    marginVertical: 10,
  },
});

export default styles;
