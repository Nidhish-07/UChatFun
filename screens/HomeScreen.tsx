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
import { auth } from "../firebase.js";
import { signOut } from "firebase/auth";

type Props = {};

type NavProps = NativeStackScreenProps<StackParamsList>;

const HomeScreen = ({ navigation }: NavProps) => {
  const signOutUser = () => {
    signOut(auth).then(() => {
      navigation.replace("Login");
    });
  };
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
    });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <CustomListItem></CustomListItem>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
