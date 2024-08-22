import HomeScreen from "../screens/Home";
import InstitucionalScreen from "../screens/Institucional";
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
];
