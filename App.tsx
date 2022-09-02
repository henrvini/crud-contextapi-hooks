import { NavigationContainer } from "@react-navigation/native";
import { UsersProvider } from "./src/context/UsersContext";

import StackNavigator from "./src/routes/StackNavigator";

export default function App() {
  return (
    <UsersProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </UsersProvider>
  );
}
