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
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 80,
    borderColor: Colors.primary.light,
    borderWidth: 2,
    borderRadius: 5,
    padding: 15,
  },
  buttonText: {
    fontSize: 18,
    color: Colors.primary.light,
  },
});

export default styles;
