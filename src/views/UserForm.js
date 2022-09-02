import { useState } from "react";
import { TabView, Text } from "react-native-elements";

const UserForm = ({ route }) => {
  const [user, setUser] = useState(route.params ? route.params : {});
  return (
    <TabView>
      <Text>User Form</Text>
    </TabView>
  );
};

export default UserForm;
