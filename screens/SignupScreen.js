import { StyleSheet, Image, View } from "react-native";
import React from "react";
import SignupForm from "../components/signupScreen/SignupForm";

const INSTAGRAM_LOGO =
  "https://img.icons8.com/fluency/194/000000/instagram-new.png";
const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logocontainer}>
        <Image
          source={{ uri: INSTAGRAM_LOGO, height: 120, width: 120 }}
        ></Image>
      </View>
      <SignupForm navigation={navigation} />
    </View>
  );
};

export default SignupScreen;

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
