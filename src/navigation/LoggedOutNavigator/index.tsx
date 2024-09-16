import { createStackNavigator } from "@react-navigation/stack";
import LogInScreen from "../../screens/Login";

import Colors from "../../constants/Colors";
import { RootListType } from "../root";

const Stack = createStackNavigator<RootListType>();

export default function LoggedOutNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary.background,
        },
      }}
    >
      <Stack.Screen
        component={LogInScreen}
        name="LogIn"
        options={{ headerTintColor: Colors.primary.background }}
      />
      {/* <Stack.Screen
        component={RetrievePasswordScreen}
        name="RetrievePassword"
        options={{ headerTintColor: "#fff" }}
      />
      <Stack.Screen
        component={PhoneRetrievalScreen}
        name="PhoneRetrieve"
        options={{ headerTintColor: "#fff" }}
      />
      <Stack.Screen
        component={EmailRetrieveScreen}
        name="EmailRetrieve"
        options={{ headerTintColor: "#fff" }}
      />
      <Stack.Screen
        component={OtpValidationScreen}
        name="OtpValidation"
        options={{ headerTintColor: "#fff" }}
      /> */}
    </Stack.Navigator>
  );
}
