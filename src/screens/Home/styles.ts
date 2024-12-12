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
    fontSize: 28,
    color: Colors.primary.dark,
  },
  highlight: {
    fontSize: 15,
    marginLeft: 10,
    color: Colors.primary.dark,
    fontWeight: "500",
  },
  seeAllTitle: {
    fontSize: 15,
    color: Colors.primary.light,
  },
});

export default styles;
