import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 200,
    // width: width,
    width: width * 0.9,
    marginHorizontal: 17,
    borderRadius: 10,
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
  },
  dot: {},
});

export default styles;
