import { Text, View } from "react-native";
import styles from "./styles";

const PRIntroduction = () => {
  return (
    <View style={styles.container}>
      <Text>
        Após minuciosa garimpagem no DJe - Diário da Justiça eletrônico do
        Estado do Paraná, os atos de interesse das atividades notariais e de
        registro são levados ao Classificador correspondente e enviados aos
        Notários e Registradores diariamente.
      </Text>
      <Text>
        Fazem parte dos Classificadores encaminhados cotidianamente ao{" "}
        <Text style={{ fontWeight: "bold" }}>
          Assinante das Publicações INR
        </Text>{" "}
        os atos emanados dos seguintes órgãos:
      </Text>
      <Text> • Presidência do Tribunal de Justiça do Estado do Paraná;</Text>
      <Text> • Corregedoria da Justiça Paranaense;</Text>
      <Text>
        {" "}
        • Divisão de Concursos da Corregedoria da Justiça Paranaense;
      </Text>
      <Text> • Conselho da Magistratura da Justiça Paranaense;</Text>
      <Text>
        {" "}
        • Além de decisões, na íntegra, da segunda instância da Justiça
        Paranaense.
      </Text>
      <Text>
        Ressalta-se que os atos contidos nas edições diárias são inseridos na{" "}
        <Text style={{ fontWeight: "bold" }}>Base de Dados INR</Text> no mesmo
        dia de sua divulgação oficial.
      </Text>
      <Text>
        <Text style={{ fontWeight: "bold" }}>A Base de Dados INR</Text> dispõe
        de moderna ferramenta de busca, permitindo ao usuário pesquisas sempre
        muito rápidas e certeiras.
      </Text>
    </View>
  );
};

export default PRIntroduction;
