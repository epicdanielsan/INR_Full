import { useState } from "react";
import { Linking, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/Colors";
import styles from "./styles";

const SPIntroduction = () => {
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
          <View style={{ marginLeft: 10 }}>
            <Text>
              • Classificador I: Atos Administrativos e Decisões do Colendo
              Conselho Superior da Magistratura do Estado de São Paulo{" "}
              <Text style={{ color: "#b22222", fontWeight: "500" }}>
                (inclusive com a íntegra dos acórdãos do CSM/SP)
              </Text>
              ;
            </Text>
            <Text>
              • Classificador II: Atos Administrativos e Decisões da Egrégia
              Corregedoria Geral da Justiça do Estado de São Paulo;
            </Text>
            <Text>
              • Classificador III: Comunicados da Egrégia Corregedoria Geral da
              Justiça do Estado de São Paulo;
            </Text>
            <Text>
              • Classificador III – Especial – Escrituras e Procurações:
              Comunicados da Egrégia Corregedoria Geral da Justiça do Estado de
              São Paulo
              <Text style={{ color: "#b22222", fontWeight: "500" }}>
                {" "}
                (classificador a que se refere o subitem "o", do item 139, do
                Capítulo XX das NSCGJ)
              </Text>
              ; e
            </Text>
            <Text>
              • Classificador IV: Atos Administrativos e Decisões das 1ª e 2ª
              Varas de Registros Públicos da Capital.
            </Text>
          </View>
          <Text>
            Ressalta-se que os atos contidos nas edições diárias dos{" "}
            <Text style={{ fontWeight: "500" }}>Classificadores INR SP</Text>{" "}
            também abastecem os Arquivos Eletrônicos - com conteúdo acumulado a
            partir do primeiro dia útil forense do ano -, atualizados
            semanalmente. Além disso, os atos selecionados são inseridos na Base
            de Dados INR no mesmo dia de sua divulgação oficial.
          </Text>
          <Text>
            A <Text style={{ fontWeight: "500" }}>Base de Dados INR</Text>{" "}
            dispõe de moderna ferramenta de busca, permitindo ao usuário
            pesquisas sempre muito rápidas e certeiras.
          </Text>
          <Text>
            Encontra-se também disponível no portal das{" "}
            <Text style={{ fontWeight: "500" }}>Publicações INR </Text>(
            <TouchableOpacity
              onPress={() => {
                Linking.openURL("http://www.inrpublicacoes.com.br");
              }}
            >
              <Text
                style={{
                  color: Colors.primary.title,
                  textDecorationLine: "underline", // Destaca como link
                }}
              >
                www.inrpublicacoes.com.br
              </Text>
            </TouchableOpacity>
            ), no endereço{" "}
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(
                  "https://inrpublicacoes.com.br/site/boletim/atos-anteriores"
                );
              }}
            >
              <Text
                style={{
                  color: Colors.primary.title,
                  textDecorationLine: "underline", // Destaca como link
                }}
              >
                https://inrpublicacoes.com.br/site/boletim/atos-anteriores
              </Text>
            </TouchableOpacity>
            , os{" "}
            <Text style={{ fontWeight: "500" }}>Classificadores INR SP</Text>{" "}
            acumulados desde 1999.
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

export default SPIntroduction;
