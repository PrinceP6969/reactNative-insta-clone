import { StyleSheet, Image, View, StatusBar } from "react-native";
import React from "react";
import LoginForm from "../components/loginScreen/LoginForm";

const INSTAGRAM_LOGO =
  "https://img.icons8.com/fluency/194/000000/instagram-new.png";
const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logocontainer}>
        <Image
          source={{ uri: INSTAGRAM_LOGO, height: 120, width: 120 }}
        ></Image>
      </View>
      <LoginForm navigation={navigation} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  logocontainer: {
    alignItems: "center",
    paddingTop: 60,
  },
});
