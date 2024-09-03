import { useNavigation } from "@react-navigation/native";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import highlightData from "./highlightData";
import styles from "./styles";

type highlightsProps = {
  numberOfHighlights: number;
  minHeight: number;
  onPress?: () => void;
};

const Highlights = (props: highlightsProps) => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={{ minHeight: props.minHeight }}>
      {highlightData &&
        highlightData.slice(0, props.numberOfHighlights).map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              navigation.navigate("Multipurpose" as never);
            }}
          >
            <View style={styles.highlightContainer}>
              <View style={{ flex: 3 }}>
                <Text numberOfLines={3} style={styles.highlightTitle}>
                  {item.title}{" "}
                </Text>
              </View>
              <View style={{ flex: 1, marginLeft: 25 }}>
                <Image
                  source={item.image}
                  style={{ height: 90, width: 90, borderRadius: 5 }}
                />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      {props.onPress && (
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={props.onPress}
        >
          <Text style={styles.buttonText}>Clique Aqui para ver mais</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

export default Highlights;
