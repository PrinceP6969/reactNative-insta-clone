import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { firebase } from "../../firebase";

const handleSignout = async () => {
  try {
    await firebase.auth().signOut();
    console.log("Signed Out");
  } catch (error) {
    console.log(error);
  }
};

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSignout}>
        <Image
          style={styles.logo}
          source={require("../../assets/instagram2.png")}
        />
      </TouchableOpacity>

      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Image
            source={require("../../assets/love.png")}
            style={styles.icon}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>11</Text>
          </View>
          <Image
            source={require("../../assets/messenger.png")}
            style={styles.icon}
          ></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
  },
  iconsContainer: {
    flexDirection: "row",
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    resizeMode: "contain",
  },
  unreadBadge: {
    backgroundColor: "#FF3250",
    position: "absolute",
    left: 20,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 25,
    zIndex: 100,
  },
  unreadBadgeText: {
    color: "white",
    fontWeight: "600",
    textAlign: "center",
  },
});

export default Header;
