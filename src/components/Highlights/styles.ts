import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  highlightContainer: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 15,
    justifyContent: "space-between",
    alignItems: "center",
  },
  highlightTitle: {
    fontSize: 15,
    marginLeft: 10,
    color: Colors.primary.dark,
    fontWeight: "500",
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 5,
  },
});

export default styles;
