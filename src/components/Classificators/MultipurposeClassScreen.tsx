import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RouteProp } from "@react-navigation/native";
import { Fragment, useContext, useRef } from "react";
import { ScrollView, Text, View } from "react-native";
import { AuthContext } from "../../contexts/AuthenticationContext";
import { RootListType } from "../../navigation/root";
import BackToTopButton from "../BackToTopButton";
import { Container } from "../Container";
import ClassItem from "./ClassItem";
import styles from "./styles";

type MultipurposeClassScreenRouteProp = RouteProp<
  RootListType,
  "MultipurposeClassScreen"
>;

type MultipurposeClassScreenNavigationProp = DrawerNavigationProp<
  RootListType,
  "MultipurposeClassScreen"
>;

interface MultipurposeClassScreenProps {
  route: MultipurposeClassScreenRouteProp;
  navigation: MultipurposeClassScreenNavigationProp;
}

const MultipurposeClassScreen = ({
  navigation,
  route,
}: MultipurposeClassScreenProps) => {
  const { classificador } = route.params;

  const authContext = useContext(AuthContext);

  navigation.setOptions({
    drawerLabel: `Classificador ${classificador.type}`,
    title: `${classificador.type} - ${classificador.date}`,
  });

  const scrollViewRef = useRef<ScrollView>(null);

  const scrollToTop = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        y: 0,
        animated: true,
      });
    }
  };

  return (
    <Container>
      <ScrollView ref={scrollViewRef}>
        {!authContext.isLoggedIn && (
          <View style={{ flex: 1 }}>
            <Text style={styles.notLoggedMessage}>
              Este conteúdo é somente para assinantes. Clique no botão{" "}
              <Text style={{ fontWeight: "500" }}>ENTRAR </Text>
              acima para entrar e visualizar o conteúdo.
            </Text>
          </View>
        )}
        {classificador && authContext.isLoggedIn && (
          <View>
            <Text style={[styles.bar, { backgroundColor: classificador.cor }]}>
              {classificador.titulo}
            </Text>
            {classificador.orgao.length > 0 &&
              classificador.orgao.map((itemOrgao: any, indexOrgao: number) => (
                <Fragment>
                  <Text
                    key={itemOrgao.id + Math.floor(Math.random() * 999999)}
                    style={styles.organTitle}
                  >
                    {itemOrgao.titulo}
                  </Text>
                  <View>
                    {itemOrgao.departamento.length > 0 &&
                      itemOrgao.departamento.map(
                        (itemDep: any, indexDep: number) => (
                          <View
                            key={
                              itemDep.id + Math.floor(Math.random() * 999999)
                            }
                          >
                            <Text style={styles.departmentTitle}>
                              {itemDep.nome}
                            </Text>
                            <Text style={{ marginLeft: 15, fontWeight: "500" }}>
                              {classificador.date}
                            </Text>
                            <View
                              style={{
                                borderBottomWidth: 1,
                                marginHorizontal: 5,
                              }}
                            ></View>
                            {itemDep.atos.length > 0 &&
                              itemDep.atos.map(
                                (itemAto: any, indexAto: number) => (
                                  <ClassItem
                                    id={itemAto.id}
                                    key={
                                      itemAto.id +
                                      Math.floor(Math.random() * 99999)
                                    }
                                  />
                                )
                              )}
                          </View>
                        )
                      )}
                  </View>
                </Fragment>
              ))}
          </View>
        )}

        {authContext.isLoggedIn && <BackToTopButton onPress={scrollToTop} />}
      </ScrollView>
    </Container>
  );
};

export default MultipurposeClassScreen;
