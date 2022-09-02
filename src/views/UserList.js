import { FlatList, View } from "react-native";
import { Avatar, ListItem } from "react-native-elements";

import users from "../data/users";

const UserList = ({ navigation }) => {
  function getUserItem({ item: user }) {
    return (
      <ListItem
        onPress={() => navigation.navigate("UserForm")}
        key={user}
        bottomDivider
      >
        <Avatar source={{ uri: user.avatarUrl }} />
        <ListItem.Content>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  }
  return (
    <FlatList
      data={users}
      keyExtractor={(user) => user.id.toString()}
      renderItem={getUserItem}
    ></FlatList>
  );
};

export default UserList;
