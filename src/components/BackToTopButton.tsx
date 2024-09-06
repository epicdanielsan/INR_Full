import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import IconSubtitled from "./IconSubtitled";

type propType = {
  onPress: () => void;
};

const BackToTopButton = (props: propType) => {
  return (
    <IconSubtitled
      style={styles.upButtonContainer}
      name="AntDesign"
      iconName="arrowup"
      title="Voltar para o topo"
      size={30}
      color={Colors.primary.dark}
      titleStyle={styles.upButtonTitle}
      onPress={props.onPress}
    />
  );
};

const styles = StyleSheet.create({
  upButtonContainer: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.primary.dark,
    width: 200,
    padding: 10,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 40,
  },
  upButtonTitle: {
    fontSize: 20,
    color: Colors.primary.light,
  },
});

export default BackToTopButton;
