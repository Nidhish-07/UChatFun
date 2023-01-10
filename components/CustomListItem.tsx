import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ListItem, Avatar } from "@rneui/themed";
import { ListItemContent } from "@rneui/base/dist/ListItem/ListItem.Content";
import { ListItemTitle } from "@rneui/base/dist/ListItem/ListItem.Title";
import { ListItemSubtitle } from "@rneui/base/dist/ListItem/ListItem.Subtitle";

type Props = { id?: string; chatName?: string; enterChat: Function };

const CustomListItem = (props: Props) => {
  return (
    <ListItem
      key={props.id}
      bottomDivider
      onPress={() => props.enterChat(props.id, props.chatName)}
    >
      <Avatar
        rounded
        source={{ uri: "https://source.unsplash.com/random?person" }}
      />
      <ListItemContent>
        <ListItemTitle style={{ fontWeight: "800" }}>
          {props.chatName}
        </ListItemTitle>
        <ListItemSubtitle numberOfLines={2} ellipsizeMode="tail">
          lorem epsum
        </ListItemSubtitle>
      </ListItemContent>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
