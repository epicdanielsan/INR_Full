import { Text, View } from "react-native";
import styles from "./styles";

const Presentation = () => {
  return (
    <View style={styles.paragraphContainer}>
      <Text style={styles.paragraph}>
        O <Text style={styles.boldText}>INR</Text> começou a dar seus primeiros
        passos no fim da década de 1980, época em que o artigo 236 da
        Constituição Federal ainda era um grande mistério para o mundo jurídico
        nacional.
      </Text>
      <Text style={styles.paragraph}>
        Ao longo destas três décadas, as{" "}
        <Text style={styles.boldText}>Publicações INR</Text> assumiram papel de
        destaque no cenário notarial e registral brasileiro.
      </Text>
      <Text style={styles.paragraph}>
        E hoje, com cerca de 5000 leitores, o{" "}
        <Text style={styles.boldText}>INR</Text> quer dar mais um importante
        passo, ser a publicação mais buscada e lida no meio notarial e
        registral. E ter você como um{" "}
        <Text style={styles.boldText}>Assinante INR</Text> é um privilégio, pois
        nossa finalidade é entregar conteúdo de qualidade e de muita relevância
        para a sua rotina.
      </Text>
    </View>
  );
};

export default Presentation;
