import { StyleSheet, View } from "react-native";
import Colors from "../../constants/Colors";

const Divisor = () => {
  return <View style={styles.line}></View>;
};

export default Divisor;

const styles = StyleSheet.create({
  line: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.primary.dark,
    marginVertical: 5,
  },
});
