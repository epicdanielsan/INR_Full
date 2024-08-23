import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomIcon from "../Icons";

export type IconSubtitledProps = {
  title: string;
  name: string;
  iconName: string;
  size?: number;
  color?: string;
  titleStyle?: {};
};

const IconSubtitled = (props: IconSubtitledProps) => {
  return (
    <TouchableOpacity style={{ marginVertical: 5, marginHorizontal: 10 }}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <CustomIcon
          iconName={props.iconName}
          name={props.name}
          size={props.size}
          color={props.color}
        />
        <Text style={[styles.title, props.titleStyle]}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default IconSubtitled;

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
  },
});
