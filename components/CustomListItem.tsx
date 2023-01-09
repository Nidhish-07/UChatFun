import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ListItem, Avatar } from "@rneui/themed";
import { ListItemContent } from "@rneui/base/dist/ListItem/ListItem.Content";
import { ListItemTitle } from "@rneui/base/dist/ListItem/ListItem.Title";
import { ListItemSubtitle } from "@rneui/base/dist/ListItem/ListItem.Subtitle";

type Props = { id?: string; chatName?: string; enterChat?: string };

const CustomListItem = (props: Props) => {
  return (
    <ListItem>
      <Avatar
        rounded
        source={{ uri: "https://source.unsplash.com/random?person" }}
      />
      <ListItemContent>
        <ListItemTitle style={{ fontWeight: "800" }}>UChatFun</ListItemTitle>
        <ListItemSubtitle numberOfLines={2} ellipsizeMode="tail">
          Testing testing testing Testing testing testing Testing testing
          testing Testing testing testing Testing testing testing Testing
          testing testing
        </ListItemSubtitle>
      </ListItemContent>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
