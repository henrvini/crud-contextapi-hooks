import { useContext } from "react";
import { Alert, FlatList } from "react-native";
import { Avatar, Button, Icon, ListItem } from "react-native-elements";
import UsersContext from "../context/UsersContext";

const UserList = ({ navigation }) => {
  const { state, dispatch } = useContext(UsersContext);

  function confirmUserDeletion(user) {
    Alert.alert("Excluir usuário", "Deseja excluir usuário permanentemente?", [
      {
        text: "Sim",
        onPress() {
          dispatch({
            type: "deleteUser",
            payload: user,
          });
        },
      },
      {
        text: "Não",
      },
    ]);
  }

  function getActions(user) {
    return (
      <>
        <Button
          onPress={() => navigation.navigate("UserForm", user)}
          type="clear"
          icon={<Icon name="edit" size={25} color={"black"} />}
        />
        <Button
          onPress={() => confirmUserDeletion(user)}
          type="clear"
          icon={<Icon name="delete" size={25} color={"red"} />}
        />
      </>
    );
  }

  function getUserItem({ item: user }) {
    return (
      <ListItem
        onPress={() => navigation.navigate("UserForm", user)}
        key={user}
        bottomDivider
      >
        <Avatar source={{ uri: user.avatarUrl }} />
        <ListItem.Content>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </ListItem.Content>
        {getActions(user)}
      </ListItem>
    );
  }

  return (
    <FlatList
      data={state.users}
      keyExtractor={(user) => user.id.toString()}
      renderItem={getUserItem}
    ></FlatList>
  );
};

export default UserList;
