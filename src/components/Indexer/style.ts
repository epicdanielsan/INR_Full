// import { StyleSheet } from "react-native";
import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  screenTitle: {
    fontSize: 25,
    fontWeight: "500",
    color: Colors.primary.dark,
    marginLeft: 20,
  },
  itemView: {
    marginVertical: 10,
    flex: 1,
    marginHorizontal: 5,
  },
  itemDate: {
    fontSize: 17,
    color: Colors.primary.light,
    fontWeight: "500",
    flex: 0.3,
  },
  itemText: {
    fontSize: 17,
    color: Colors.primary.light,
    fontWeight: "500",
    flex: 0.7,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginVertical: 20,
  },
});

export default styles;
