import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import CustomListItem from "../components/CustomListItem";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamsList } from "../navigation/types";
import { Avatar } from "@rneui/themed";
import { auth, db } from "../firebase.js";
import { signOut } from "firebase/auth";
import { Ionicons } from "@expo/vector-icons";
import { doc, onSnapshot, collection, Index } from "firebase/firestore";

type Props = {};

type NavProps = NativeStackScreenProps<StackParamsList>;

const HomeScreen = ({ navigation }: NavProps) => {
  const signOutUser = () => {
    signOut(auth).then(() => {
      navigation.replace("Login");
    });
  };

  const [chats, setChats] = React.useState<{ id: string; data: string }[]>([]);

  React.useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "chats"), (snapshot) => {
      setChats(
        snapshot.docs.map((doc): any => ({ id: doc.id, data: doc.data() }))
      );
    });

    return unsubscribe;
  }, []);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "UChatFun",
      headerStyle: { backgroundColor: "#fff" },
      headerTitleStyle: { color: "#2d2d2d" },
      headerTintColor: "2d2d2d",
      headerTitleAlign: "center",

      headerLeft: () => (
        <View>
          <TouchableOpacity activeOpacity={0.4} onPress={signOutUser}>
            <Avatar
              rounded
              source={{ uri: auth?.currentUser?.photoURL?.toString() }}
            />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 60,
          }}
        >
          <TouchableOpacity activeOpacity={0.4}>
            <Ionicons name="camera-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={() => navigation.navigate("AddChat")}
          >
            <Ionicons name="pencil-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);

  const enterChat = () => {};

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        {chats.map((chat) => {
          const chatName = chat.data;
          return (
            <CustomListItem
              id={chat.id}
              chatName={chatName}
              key={chat.id}
              enterChat={enterChat}
            ></CustomListItem>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
