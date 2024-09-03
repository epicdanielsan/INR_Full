import MultipurposeClassPage from "../components/Classificators/MultipurposeClassPage";
import HighlightsScreen from "../screens/Highlights";
import HomeScreen from "../screens/Home";
import InstitucionalScreen from "../screens/Institucional";
import LegislationScreen from "../screens/Legislation";
import MultipurposeScreen from "../screens/Multipurpose";
import NewsScreen from "../screens/News";
import SettingsScreen from "../screens/Settings";
import SPClassificator from "../screens/SP";

interface ScreensArrayProps {
  route: string;
  label: string;
  component: () => React.JSX.Element;
}

export const ScreensArray: ScreensArrayProps[] = [
  {
    route: "Início",
    label: "Início",
    component: HomeScreen,
  },
  {
    route: "Configurações",
    label: "Configurações",
    component: SettingsScreen,
  },
  {
    route: "Institucional",
    label: "Institucional",
    component: InstitucionalScreen,
  },
  {
    route: "Destaques",
    label: "Destaques",
    component: HighlightsScreen,
  },

  {
    route: "Notícias",
    label: "Notícias",
    component: NewsScreen,
  },
  {
    route: "Legislação",
    label: "Legislação",
    component: LegislationScreen,
  },
  {
    route: "Multipurpose",
    label: "Multipurpose",
    component: MultipurposeScreen,
  },
  {
    route: "Classificadores SP",
    label: "Classificadores SP",
    component: SPClassificator,
  },
  {
    route: "MultipurposeClassPage",
    label: "MultipurposeClassPage",
    component: MultipurposeClassPage,
  },
];
