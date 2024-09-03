import {
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import RenderHtml from "react-native-render-html";
import { Container } from "../../components/Container";
import Colors from "../../constants/Colors";

const HTMLElement = {
  title: "Bancário terá indenização corrigida pela taxa Selic – (TST).",
  subtitle:
    "O indexador será aplicado desde a data do ajuizamento da reclamação trabalhista.",
  date: "26/08/2024",
  html: `
    <p><img alt="Detalhe de pessoa acompanhando indicadores econômicos na tela de tablet" height="512" src="https://www.tst.jus.br/documents/10157/2374827/8369.jpg/6c73f61f-375b-98fe-2392-cac23a53ffa4" width="768" /></p>

<p>A Subse&ccedil;&atilde;o I Especializada em Diss&iacute;dios Individuais (SDI-1) do Tribunal Superior do Trabalho determinou a aplica&ccedil;&atilde;o da taxa Selic no c&aacute;lculo dos juros e da corre&ccedil;&atilde;o monet&aacute;ria de uma indeniza&ccedil;&atilde;o a ser paga pelo Banco Santander (Brasil) S.A. a um banc&aacute;rio, numa a&ccedil;&atilde;o trabalhista iniciada em 2011. A decis&atilde;o do colegiado respons&aacute;vel pela uniformiza&ccedil;&atilde;o da jurisprud&ecirc;ncia das Turmas do TST segue entendimentos recentes do Tribunal e do Supremo Tribunal Federal (STF) sobre a mat&eacute;ria.&nbsp;</p>

<p>Anteriormente, o entendimento do TST (S&uacute;mula 439) era de que os juros de mora das condena&ccedil;&otilde;es por danos morais e materiais deveriam ser contados da data do ajuizamento da a&ccedil;&atilde;o. No entanto, a corre&ccedil;&atilde;o monet&aacute;ria se daria a partir da decis&atilde;o que arbitrou ou alterou os valores das condena&ccedil;&otilde;es, ou seja, no momento em que o direito &agrave; verba indenizat&oacute;ria &eacute; reconhecido.</p>

<p><strong>Atualiza&ccedil;&atilde;o monet&aacute;ria</strong></p>

<p>No julgamento do caso, o Tribunal Regional do Trabalho da 4&ordf; Regi&atilde;o (RS) tinha estabelecido que o &iacute;ndice da corre&ccedil;&atilde;o monet&aacute;ria seria o IPCA-E, e a decis&atilde;o foi mantida pela S&eacute;tima Turma do TST, em 2017. Para a Turma, n&atilde;o havia no caso ofensa direta e literal &agrave; Constitui&ccedil;&atilde;o da Rep&uacute;blica, &uacute;nica forma de cabimento de recurso de revista quando o processo est&aacute; em fase de execu&ccedil;&atilde;o.&nbsp;</p>

<p>Em 2020, o STF firmou o entendimento vinculante (a ser observado em todas as inst&acirc;ncias) de que os cr&eacute;ditos trabalhistas devem ser corrigidos da mesma forma que as condena&ccedil;&otilde;es c&iacute;veis: na fase pr&eacute;-judicial, pelo IPCA-E, e, a partir do ajuizamento da a&ccedil;&atilde;o, pela Selic. Ficou decidido, ainda, que, nos processos em fase de execu&ccedil;&atilde;o com d&eacute;bitos ainda n&atilde;o quitados e sem &iacute;ndice de corre&ccedil;&atilde;o definido deveriam seguir esse precedente.</p>

<p><strong>Taxa Selic</strong></p>

<p>O relator dos embargos do banco &agrave; SDI-1, ministro ministro Breno Medeiros, explicou que, com a decis&atilde;o do STF, se o &iacute;ndice de corre&ccedil;&atilde;o n&atilde;o tiver sido definido na decis&atilde;o definitiva, a taxa Selic passou a ser utilizada de forma geral tanto para a corre&ccedil;&atilde;o quanto para os juros de mora.</p>

<p>A decis&atilde;o foi un&acirc;nime.</p>

<p><em>(Guilherme Santos/CF)&nbsp;</em></p>

<p>Processo:&nbsp;<a href="https://consultaprocessual.tst.jus.br/consultaProcessual/resumoForm.do?consulta=1&amp;numeroInt=182209&amp;anoInt=2012" target="_blank">E-RR-202-65.2011.5.04.0030</a></p>

  `,
};

const MultipurposeScreen = () => {
  const { width } = useWindowDimensions();
  return (
    <Container>
      <ScrollView>
        <Text style={styles.title}>{HTMLElement.title}</Text>
        <Text style={styles.title}>{HTMLElement.subtitle}</Text>
        <Text style={styles.title}>{HTMLElement.date}</Text>
        <View style={styles.container}>
          <RenderHtml contentWidth={width} source={HTMLElement} />
        </View>
      </ScrollView>
    </Container>
  );
};

export default MultipurposeScreen;

const styles = StyleSheet.create({
  title: {
    marginLeft: 15,
    marginVertical: 5,
    color: Colors.primary.title,
    fontSize: 17,
  },
  container: {
    marginHorizontal: 10,
  },
});
