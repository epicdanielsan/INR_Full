import { ImageSourcePropType } from "react-native";

interface HighlightProp {
  id: number;
  date: string;
  title: string;
  subTitle?: string;
  image: ImageSourcePropType | undefined;
}

const highlightData: HighlightProp[] = [
  {
    id: 1,
    date: "21/08/2024",
    title: "CNJ cria Exame Nacional dos Cartórios – (CNJ).",
    subTitle: "",
    image: require("../../../assets/images/destaque1.jpg"),
  },
  {
    id: 2,
    date: "14/08/2024",
    title:
      "Acordo permitirá o compartilhamento de dados do Sistema Eletrônico dos Registros Públicos com MP – (CNJ).",
    subTitle: "",
    image: require("../../../assets/images/destaque2.jpg"),
  },
  {
    id: 3,
    date: "16/08/2024",
    title:
      "XLIX Encontro dos Oficiais de Registro de Imóveis do Brasil: Painel abordará o registro de imóveis brasileiro – (IRIB).",
    subTitle:
      "Presidentes do IRIB, ONR e RIB participarão de painel sobre atual cenário do registro imobiliário brasileiro e suas perspectivas.",
    image: require("../../../assets/images/destaque3.jpg"),
  },
  {
    id: 4,
    date: "21/08/2024",
    title:
      "Provimento agiliza autorizações de viagem e outros atos de autenticação em cartórios – (CNJ).",
    image: require("../../../assets/images/destaque4.png"),
  },
  {
    id: 5,
    date: "21/08/2024",
    title:
      "Provimento agiliza autorizações de viagem e outros atos de autenticação em cartórios – (CNJ).",
    image: require("../../../assets/images/destaque4.png"),
  },
  {
    id: 6,
    date: "21/08/2024",
    title:
      "Provimento agiliza autorizações de viagem e outros atos de autenticação em cartórios – (CNJ).",
    image: require("../../../assets/images/destaque4.png"),
  },
  {
    id: 7,
    date: "21/08/2024",
    title:
      "Provimento agiliza autorizações de viagem e outros atos de autenticação em cartórios – (CNJ).",
    image: require("../../../assets/images/destaque4.png"),
  },
  {
    id: 8,
    date: "21/08/2024",
    title:
      "Provimento agiliza autorizações de viagem e outros atos de autenticação em cartórios – (CNJ).",
    image: require("../../../assets/images/destaque4.png"),
  },
  {
    id: 9,
    date: "21/08/2024",
    title:
      "Provimento agiliza autorizações de viagem e outros atos de autenticação em cartórios – (CNJ).",
    image: require("../../../assets/images/destaque4.png"),
  },
  {
    id: 10,
    date: "21/08/2024",
    title:
      "Provimento agiliza autorizações de viagem e outros atos de autenticação em cartórios – (CNJ).",
    image: require("../../../assets/images/destaque4.png"),
  },
  {
    id: 11,
    date: "21/08/2024",
    title:
      "Provimento agiliza autorizações de viagem e outros atos de autenticação em cartórios – (CNJ).",
    image: require("../../../assets/images/destaque4.png"),
  },
];

export default highlightData;
