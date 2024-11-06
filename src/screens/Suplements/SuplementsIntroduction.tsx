import { StyleSheet, Text, View } from "react-native";

const SuplementsIntroduction = () => {
  return (
    <View style={{ justifyContent: "center" }}>
      <Text style={styles.text}>
        A <Text style={styles.boldText}>Consultoria</Text> mantida pelo
        <Text style={styles.boldText}> INR</Text> apoia-se em relevante acervo
        técnico para instruir com prudência e competência seus usuários. São
        textos produzidos pelos membros da consultoria, com supervisão ativa dos
        seus coordenadores (Antonio Herance Filho e Anderson Herance), que dão
        suporte teórico à opinião revelada ao consulente.A Consultoria mantida
        pelo INR apoia-se em relevante acervo técnico para instruir com
        prudência e competência seus usuários. São textos produzidos pelos
        membros da consultoria, com supervisão ativa dos seus coordenadores
        (Antonio Herance Filho e Anderson Herance), que dão suporte teórico à
        opinião revelada ao consulente.
      </Text>
      <Text style={styles.text}>
        Esses textos, que invariavelmente abordam questões ligadas aos Direitos
        Tributário, Trabalhista e Previdenciário, estão agora disponíveis a
        todos os assinantes <Text style={styles.boldText}>INR</Text>, mesmo
        àqueles poucos que jamais nos dirigiram uma só consulta. Encontre por
        aqui várias informações que lhe ajudarão a resolver problemas
        cotidianos. E, claro, restando alguma dúvida depois da leitura de
        quaisquer dos conteúdos, sinta-se à vontade para procurar pela{" "}
        <Text style={styles.boldText}>Consultoria INR</Text>.
      </Text>
      <Text style={styles.text}>
        Neste ambiente podem ser acessados todos os Suplementos publicados pelo{" "}
        <Text style={styles.boldText}>INR</Text>.
      </Text>
    </View>
  );
};

export default SuplementsIntroduction;

const styles = StyleSheet.create({
  text: {
    marginHorizontal: 10,
    fontSize: 15,
  },
  boldText: {
    fontWeight: "500",
  },
});
