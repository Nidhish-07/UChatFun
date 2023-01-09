import { StyleSheet, View, KeyboardAvoidingView } from "react-native";
import { Button, Input, Text } from "@rneui/themed";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamsList } from "../navigation/types";
import { auth } from "../firebase.js";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

type Props = {};

type NavProps = NativeStackScreenProps<StackParamsList>;

const RegisterScreen = ({ navigation }: NavProps) => {
  const [firstName, setFirstName] = React.useState<string>("");
  const [lastName, setLastName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [imageUrl, setImageUrl] = React.useState<string>("");

  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        updateProfile(authUser.user, {
          displayName: firstName + " " + lastName,
          photoURL: imageUrl || "https://source.unsplash.com/random?register",
        });
      })
      .catch((error) => alert(error.message));
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Back to login",
    });
  }, [navigation]);

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Text h3 style={{ marginBottom: 50, fontSize: 24 }}>
        Create an account
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Firstname"
          value={firstName}
          textContentType="name"
          autoFocus
          onChangeText={(text: string) => setFirstName(text)}
        />
        <Input
          placeholder="Lastname"
          value={lastName}
          textContentType="name"
          autoFocus
          onChangeText={(text: string) => setLastName(text)}
        />
        <Input
          placeholder="Email Address"
          value={email}
          textContentType="emailAddress"
          autoFocus
          onChangeText={(text: string) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          value={password}
          textContentType="password"
          autoFocus
          onChangeText={(text: string) => setPassword(text)}
        />
        <Input
          placeholder="Image (optional)"
          value={imageUrl}
          textContentType="URL"
          autoFocus
          onChangeText={(text: string) => setImageUrl(text)}
          onSubmitEditing={register}
        />
      </View>

      <Button
        onPress={register}
        title="Register"
        raised
        style={styles.button}
      ></Button>
      <View style={{ marginBottom: 100 }}></View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#fff",
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
