import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 200,
    width: width * 0.9,
    marginHorizontal: 20,
    borderRadius: 15,
    resizeMode: "contain",
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
  },
  dot: {},
});

export default styles;
