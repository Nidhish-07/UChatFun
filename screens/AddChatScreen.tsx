import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamsList } from "../navigation/types";
import { Input, Button } from "@rneui/themed";
import { Ionicons } from "@expo/vector-icons";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

type Props = {};

type NavProps = NativeStackScreenProps<StackParamsList>;

const AddChatScreen = ({ navigation }: NavProps) => {
  const [inputChat, setInputChat] = React.useState<string>("");

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a chat",
      headerBackTitle: "Chats",
    });
  }, [navigation]);

  const createChatHandler = async () => {
    await addDoc(collection(db, "chats"), {
      chatName: inputChat,
    })
      .then(() => navigation.goBack())
      .catch((err) => alert(err.message));
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Chat name"
        value={inputChat}
        onChangeText={(text) => setInputChat(text)}
        leftIcon={<Ionicons name="chatbubbles" size={24} color="black" />}
        onSubmitEditing={createChatHandler}
      ></Input>
      <Button onPress={createChatHandler} title="Create chat"></Button>
    </View>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
    padding: 25,
  },
});
