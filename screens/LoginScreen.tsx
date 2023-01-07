import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import React from "react";
import { Button, Input, Image } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";

type Props = {};

const LoginScreen = (props: Props) => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

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
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Email"
          secureTextEntry
          textContentType="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <Button title={"Login"} style={styles.button} onPress={signIn}>
        Login
      </Button>
      <Button title={"Register"} type="outline" style={styles.button}>
        Login
      </Button>
      <View style={{ height: 100 }}></View>
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
