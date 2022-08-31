import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Icon } from "react-native-elements";

import UserForm from "../views/UserForm";
import UserList from "../views/UserList";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="UserList" screenOptions={screenOptions}>
      <Stack.Group>
        <Stack.Screen
          name="UserList"
          component={UserList}
          options={({ navigation }) => {
            return {
              title: "User List",
              headerRight: () => (
                <Button
                  onPress={() => navigation.navigate("UserForm")}
                  type="clear"
                  icon={<Icon name="add" size={25} color={"white"} />}
                />
              ),
            };
          }}
        />
        <Stack.Screen
          name="UserForm"
          component={UserForm}
          options={{ title: "User form" }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const screenOptions = {
  headerStyle: {
    backgroundColor: "#f4511e",
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

export default StackNavigator;
