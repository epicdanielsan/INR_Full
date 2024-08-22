import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Foundation from "@expo/vector-icons/Foundation";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Octicons from "@expo/vector-icons/Octicons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { View } from "react-native";

interface IconLibrary {
  [key: string]: any;
}

export const iconLibraries: IconLibrary = {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
  Feather,
  FontAwesome,
  FontAwesome5,
  AntDesign,
  Entypo,
  SimpleLineIcons,
  Octicons,
  Foundation,
  EvilIcons,
  FontAwesome6,
};

interface IconProps {
  name: string;
  iconName: string;
  color?: string;
  size?: number;
  style?: object;
}

const CustomIcon = ({ name, iconName, size, color }: IconProps) => {
  const IconComponent = iconLibraries[name];
  if (!IconComponent) {
    console.warn(`Biblioteca de ícones "${name}" não encontrada.`);
    return null;
  }

  return (
    <View>
      <IconComponent name={iconName} size={size} color={color} />
    </View>
  );
};

export default CustomIcon;
