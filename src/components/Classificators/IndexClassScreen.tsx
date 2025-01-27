import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RouteProp, useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { RootListType } from "../../navigation/root";
import { Container } from "../Container";
import styles from "./styles";

type IndexClassScreenRouteProp = RouteProp<RootListType, "IndexClassScreen">;

type IndexClassScreenNavigationProp = DrawerNavigationProp<
  RootListType,
  "IndexClassScreen"
>;

interface IndexClassScreenProps {
  route: IndexClassScreenRouteProp;
  navigation: IndexClassScreenNavigationProp;
}

const IndexClassScreen = ({ route, navigation }: IndexClassScreenProps) => {
  const { classificador } = route.params;
  const [classState, setClassState] = useState<any[]>([]);

  navigation.setOptions({
    drawerLabel: `Classificador ${classificador.type}`,
    title: `Classificador ${classificador.type} `,
  });

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        try {
          setClassState([]);
          const indexResponse = await axios.get(
            `https://api.legacy.publicacoesinr.com.br/classifiers/${classificador.id}`
          );
          if (indexResponse.data.success) {
            setClassState(() => [indexResponse.data.data]);
          }
        } catch (error: any) {
          console.warn(error.message);
        }
      };

      fetchData();
    }, [classificador.id])
  );

  useEffect(() => {
    const initialSetup = async () => {
      try {
        const indexResponse = await axios.get(
          `https://api.legacy.publicacoesinr.com.br/classifiers/${classificador.id}`
        );
        if (indexResponse.data.success) {
          setClassState(() => [indexResponse.data.data]);
        }
      } catch (error: any) {
        console.warn(error.message);
      }
    };

    initialSetup();
  }, []);

  return (
    <Container>
      <ScrollView>
        {classificador && (
          <Text style={styles.title}>
            Classificadores INR {classificador.type} - {classificador.date}
          </Text>
        )}
        <Text style={styles.indexTitle}>Índice</Text>
        {classState &&
          classState.map((item: any, index: number) => (
            <View key={index} style={styles.container}>
              <View>
                {item.barra &&
                  item.barra.map((itemBar: any, indexBar: number) => (
                    <Fragment>
                      <View style={{ marginTop: 10 }} key={itemBar.id}>
                        <TouchableOpacity
                          onPress={() => {
                            navigation.navigate("MultipurposeClassScreen", {
                              classificador: {
                                ...itemBar,
                                type: classificador.type,
                                date: classificador.date,
                              },
                            });
                          }}
                        >
                          <Text style={styles.barTitle} key={indexBar}>
                            {itemBar.titulo}
                          </Text>
                        </TouchableOpacity>
                        {itemBar.orgao &&
                          itemBar.orgao.map(
                            (itemOrgao: any, indexOrgao: number) => (
                              <View key={itemOrgao.id}>
                                <Text
                                  key={indexOrgao}
                                  style={{ marginLeft: 10 }}
                                >
                                  {itemOrgao.titulo}
                                </Text>

                                {itemOrgao.departamento &&
                                  itemOrgao.departamento.map(
                                    (itemDep: any, indexDep: number) => (
                                      <View key={itemDep.id}>
                                        <Text
                                          key={indexDep}
                                          style={[
                                            styles.barTitle,
                                            { marginLeft: 10 },
                                          ]}
                                        >
                                          {itemDep.nome}
                                        </Text>
                                        {itemDep.atos &&
                                          itemDep.atos.map(
                                            (
                                              itemAtos: any,
                                              indexAtos: number
                                            ) => (
                                              <Text
                                                style={{ marginLeft: 20 }}
                                                key={itemAtos.id}
                                              >
                                                {itemAtos.titulo}
                                              </Text>
                                            )
                                          )}
                                      </View>
                                    )
                                  )}
                              </View>
                            )
                          )}
                      </View>
                    </Fragment>
                  ))}
                <Text style={styles.barTitle}>{item.bar}</Text>
              </View>
            </View>
          ))}
      </ScrollView>
    </Container>
  );
};

export default IndexClassScreen;
