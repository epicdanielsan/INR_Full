import HomeScreen from "../../screens/Home";
import InstitucionalScreen from "../../screens/Institucional";
import LegislationScreen from "../../screens/Legislation";
import NewsScreen from "../../screens/News";
import SPClassificator from "../../screens/SP";

interface MenuItem {
  title: string;
  component: React.ComponentType | null;
  route?: string;
}

interface DrawerMenuItem {
  title: string;
  route?: string;
  icon: string;
  iconName: string;
  component?: () => React.JSX.Element;
  menuList?: MenuItem[];
}

export const drawerMenu: DrawerMenuItem[] = [
  {
    title: "Início",
    route: "Início",
    component: HomeScreen,
    icon: "Ionicons",
    iconName: "home",
  },
  {
    title: "Institucional",
    route: "Institucional",
    component: InstitucionalScreen,
    icon: "FontAwesome",
    iconName: "legal",
  },
  {
    title: "Boletim Eletrônico",
    icon: "Ionicons",
    iconName: "newspaper-outline",
    component: undefined,
    menuList: [
      { title: "Notícias", component: NewsScreen, route: "Notícias" },
      {
        title: "Legislação",
        component: LegislationScreen,
        route: "Legislação",
      },
      { title: "Jurisprudência", component: null },
      { title: "Opinião", component: null },
      { title: "Perguntas e Respostas", component: null },
      { title: "Mensagens dos Editores", component: null },
      { title: "Pareceres CGJ SP", component: null },
      { title: "Suplementos da Consultoria INR", component: null },
    ],
  },
  {
    title: "Classificadores INR",
    icon: "Entypo",
    iconName: "news",
    menuList: [
      { title: "Classificadores INR PR", component: null },
      {
        title: "Classificadores INR SP",
        component: SPClassificator,
        route: "Classificadores SP",
      },
      { title: "Classificadores INR RS", component: null },
      { title: "Arquivos Acumulados dos Classificadores SP", component: null },
    ],
  },
  {
    title: "Salas Temáticas",
    route: "Salas Temáticas",
    component: InstitucionalScreen,
    icon: "FontAwesome6",
    iconName: "people-group",
  },
  {
    title: "Serviços",
    icon: "AntDesign",
    iconName: "customerservice",
    menuList: [
      { title: "Consultoria INR", component: null },
      { title: "INR Cursos", component: null },
      { title: "TV INR", component: null },
      { title: "Consultoria Notarial e Registral", component: null },
    ],
  },
  {
    title: "Base de Dados",
    route: "Base de Dados",
    component: InstitucionalScreen,
    icon: "MaterialCommunityIcons",
    iconName: "bookshelf",
  },
  {
    title: "Downloads",
    route: "Downloads",
    component: InstitucionalScreen,
    icon: "MaterialIcons",
    iconName: "download",
  },
  {
    title: "INR Contábil",
    route: "INR Contábil",
    component: InstitucionalScreen,
    icon: "Ionicons",
    iconName: "calculator-sharp",
  },
  {
    title: "Configurações",
    route: "Configurações",
    component: InstitucionalScreen,
    icon: "Ionicons",
    iconName: "settings",
  },
];
