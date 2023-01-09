import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import React from "react";
import { Button, Input, Image } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamsList } from "../navigation/types";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.js";

type Props = {};

type NavProps = NativeStackScreenProps<StackParamsList>;
const LoginScreen = ({ navigation }: NavProps) => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  React.useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        navigation.replace("Home");
      }
    });

    return unsubscribe
  }, []);

  const signIn = () => {};


  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <StatusBar style="light"></StatusBar>
      <Image
        source={{ uri: "https://source.unsplash.com/random?chat" }}
        style={styles.logo}
      ></Image>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          textContentType="emailAddress"
          value={email}
          onChangeText={(text: string) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          textContentType="password"
          value={password}
          onChangeText={(text: string) => setPassword(text)}
        />
      </View>
      <Button title={"Login"} style={styles.button} onPress={signIn} raised>
        Login
      </Button>
      <Button
        title={"Register"}
        type="outline"
        style={styles.button}
        onPress={() => {
          return navigation.navigate("Register");
        }}
      >
        Register
      </Button>
      <View style={{ height: 50 }}></View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 10,
  },
});
