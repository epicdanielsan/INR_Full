import HighlightsScreen from "../screens/Highlights";
import HomeScreen from "../screens/Home";
import InstitucionalScreen from "../screens/Institucional";
import MultipurposeScreen from "../screens/Multipurpose";
import NewsScreen from "../screens/News";
import ProfileScreen from "../screens/Profile";
import SettingsScreen from "../screens/Settings";

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
    route: "Perfil",
    label: "Perfil",
    component: ProfileScreen,
  },
  {
    route: "Configurações",
    label: "Configurações",
    component: SettingsScreen,
  },
  {
    route: "NewsScreen",
    label: "NewsScreen",
    component: NewsScreen,
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
    route: "Multipurpose",
    label: "Daniel",
    component: MultipurposeScreen,
  },
];
