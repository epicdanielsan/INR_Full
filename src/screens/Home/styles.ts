import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  highlightContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 5,
  },
  highlightTitle: {
    fontSize: 25,
    color: Colors.primary.dark,
  },
  seeAllTitle: {
    fontSize: 15,
    color: Colors.primary.light,
  },
});

export default styles;
