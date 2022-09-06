import { useContext, useState } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";
import { Text } from "react-native-elements";

import UsersContext from "../context/UsersContext";

const UserForm = ({ route, navigation }) => {
  const [user, setUser] = useState(route.params ? route.params : {});
  const { dispatch } = useContext(UsersContext);

  console.log(user);
  return (
    <View style={styles.form}>
      <Text>Nome</Text>
      <TextInput
        onChangeText={(name) => setUser({ ...user, name })}
        placeholder="Informe o nome"
        value={user.name}
        style={styles.input}
      />
      <Text>E-mail</Text>
      <TextInput
        onChangeText={(email) => setUser({ ...user, email })}
        placeholder="Informe o e-mail"
        value={user.email}
        style={styles.input}
      />
      <Text>URL do avatar</Text>
      <TextInput
        onChangeText={(avatarUrl) => setUser({ ...user, avatarUrl })}
        placeholder="Informe a URL do seu avatar"
        value={user.avatarUrl}
        style={styles.input}
      />
      <Button
        title={"Salvar"}
        onPress={() => {
          dispatch({
            type: user.id ? "updateUser" : "createUser",
            payload: user,
          });
          navigation.goBack();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    padding: 12,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginVertical: 5,
    borderRadius: 20,
    padding: 10,
  },
});

export default UserForm;
