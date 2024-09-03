import { useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Container } from "../../components/Container";
import IconSubtitled from "../../components/IconSubtitled";
import Colors from "../../constants/Colors";
import {
  directorsMockData,
  institucionalMockData,
  institucionalMockData2,
} from "./institucionalMockData";
import Presentation from "./Presentation";
import styles from "./styles";

const InstitucionalScreen = () => {
  const screenWidth = Dimensions.get("window").width;
  const [activeDirector, setActiveDirector] = useState<any>(
    directorsMockData[0]
  );

  return (
    <Container>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.title}>Quem Somos</Text>
          <Presentation />
          <Text style={styles.title}>O que fazemos</Text>
          <Text style={styles.subtitle}>
            Informamos (Boletim Eletrônico INR)
          </Text>
          <View style={styles.buttonsContainer}>
            {institucionalMockData &&
              institucionalMockData.map((item, index) => (
                <TouchableOpacity
                  key={`${index}-nhfgb${new Date().getMilliseconds()}`}
                >
                  <IconSubtitled
                    iconName={item.iconName}
                    name={item.name}
                    title={item.title}
                    color={item.color ? item.color : Colors.primary.dark}
                    size={item.size ? item.size : 30}
                    style={styles.buttonItem}
                    titleStyle={styles.itemTitle}
                  />
                </TouchableOpacity>
              ))}
          </View>
          <Text style={styles.subtitle}>Instruímos</Text>
          <View style={styles.buttonsContainer}>
            {institucionalMockData2 &&
              institucionalMockData2.map((item, index) => (
                <TouchableOpacity
                  key={`${index}-asd${new Date().getMilliseconds()}`}
                >
                  <IconSubtitled
                    iconName={item.iconName}
                    name={item.name}
                    title={item.title}
                    color={item.color ? item.color : Colors.primary.dark}
                    size={item.size ? item.size : 30}
                    titleStyle={item.titleStyle}
                  />
                </TouchableOpacity>
              ))}
          </View>
          <Text style={styles.title}>Dirigentes das Publicações INR</Text>
          <View style={styles.directorsContainer}>
            {directorsMockData &&
              directorsMockData.map((item, index) => (
                <TouchableOpacity
                  style={styles.directorsItem}
                  key={`${index}-123${new Date().getMilliseconds()}`}
                  onPress={() => {
                    setActiveDirector(directorsMockData[index]);
                  }}
                >
                  <Image
                    source={item.source}
                    style={{ width: 110, height: 150 }}
                  />
                  <Text style={styles.directorsTitle} numberOfLines={5}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              ))}
          </View>
        </View>
        <View style={styles.paragraphContainer}>
          <Text style={styles.paragraph}>
            <Text style={[styles.boldText, { fontSize: 20 }]}>
              {activeDirector.title}
            </Text>
          </Text>
          {activeDirector.description && activeDirector.description()}
        </View>
      </ScrollView>
    </Container>
  );
};

export default InstitucionalScreen;
