import { Text, View } from "react-native";

type craftStoriesProps = {
  item: any;
};

const CraftStoriesItem = (props: craftStoriesProps) => {
  return (
    <View>
      <Text>Histórias do Ofício</Text>
      <Text>{JSON.stringify(props.item)}</Text>
    </View>
  );
};

export default CraftStoriesItem;
