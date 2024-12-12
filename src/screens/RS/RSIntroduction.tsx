import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/Colors";
import styles from "./styles";

const RSIntroduction = () => {
  const [showIntroduction, setShowIntroduction] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Text>
        A manutenção dos Classificadores, segundo as Normas de Serviço da
        Corregedoria Geral da Justiça, é obrigatória (Capítulo XIII, Seção III,
        Subseção II – Dos Classificadores Obrigatórios, item 57, letras “a”, “b”
        e “c”) e seu arquivamento eletrônico passou a ser reconhecido após as
        inovações aprovadas pelo Provimento CG nº 39, de 14 de dezembro de 2012
        (regra atualmente prevista no Capítulo XIII, Seção III, Subseção II –
        Dos Classificadores Obrigatórios, item 57.1).
      </Text>
      {showIntroduction && (
        <View>
          <Text>
            Desde a publicação do mencionado Provimento CG nº 39, de 14 de
            dezembro de 2012, os{" "}
            <Text style={{ fontWeight: "bold" }}>Classificadores INR SP</Text>{" "}
            têm passado por uma série de mudanças, a fim de proporcionar aos{" "}
            <Text style={{ fontWeight: "bold" }}>
              Assinantes das Publicações INR
            </Text>{" "}
            uma experiência dinâmica e compatível com as exigências da
            Corregedoria Geral da Justiça. Com novos recursos e ferramentas, os{" "}
            <Text style={{ fontWeight: "bold" }}>Classificadores INR SP</Text>,
            cem por cento eletrônicos, levaram ao cotidiano de Notários e
            Registradores agilidade, facilidade e segurança.
          </Text>
          <Text>
            Assim, a começar de janeiro de 2013, além da divulgação por meio das
            edições diárias do{" "}
            <Text style={{ fontWeight: "bold" }}>Classificadores INR SP</Text>,
            estas passaram a ser substituídas, semanalmente, por versões
            atualizadas e com conteúdo acumulado desde o primeiro dia de
            publicações do ano vigente, até o final de cada exercício. São os
            chamados{" "}
            <Text style={{ fontWeight: "bold" }}>
              Classificadores Eletrônicos Acumulados
            </Text>
            , que possuem índice próprio, por assunto e com menção ao número do
            ato e à comarca de origem.
          </Text>
          <Text>
            Essa nova sistemática de disponibilização dos{" "}
            <Text style={{ fontWeight: "bold" }}>Classificadores INR SP</Text>{" "}
            trouxe inúmeras vantagens aos{" "}
            <Text style={{ fontWeight: "bold" }}>
              Assinantes das Publicações INR
            </Text>
            . Entre elas estão:
          </Text>
        </View>
      )}
      {!showIntroduction ? (
        <TouchableOpacity
          onPress={() => {
            setShowIntroduction(!showIntroduction);
          }}
        >
          <Text
            style={{
              color: Colors.primary.title,

              textAlign: "right",
            }}
          >
            ...Ler Mais
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            setShowIntroduction(!showIntroduction);
          }}
        >
          <Text
            style={{
              color: Colors.primary.title,

              textAlign: "right",
            }}
          >
            ...Ler Menos
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default RSIntroduction;
