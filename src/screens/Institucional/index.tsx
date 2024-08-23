import { ScrollView, Text, View } from "react-native";
import { Container } from "../../components/Container";
import IconSubtitled from "../../components/IconSubtitled";
import Colors from "../../constants/Colors";
import institucionalMockData from "./institucionalMockData";
import Presentation from "./Presentation";
import styles from "./styles";

const InstitucionalScreen = () => {
  return (
    <Container>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Quem Somos</Text>
          <Presentation />
          <Text style={styles.title}>O que fazemos</Text>
          <Text style={styles.subtitle}>
            Informamos (Boletim Eletrônico INR)
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginHorizontal: 20,
            marginVertical: 10,
          }}
        >
          {institucionalMockData &&
            institucionalMockData.map((item, index) => (
              <IconSubtitled
                iconName={item.iconName}
                name={item.name}
                title={item.title}
                color={item.color ? item.color : Colors.primary.dark}
                size={item.size ? item.size : 30}
                titleStyle={item.titleStyle}
              />
            ))}
        </View>
      </ScrollView>
    </Container>
  );
};

export default InstitucionalScreen;
