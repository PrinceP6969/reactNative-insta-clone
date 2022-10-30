import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Divider, Image } from "react-native-elements";

export const bottomTabIcons = [
  {
    name: "Home",
    active: "https://img.icons8.com/fluency-systems-filled/96/FFFFFF/home.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/96/FFFFFF/home.png",
  },
  {
    name: "Seach",
    active: "https://img.icons8.com/sf-black/128/FFFFFF/search.png",
    inactive: "https://img.icons8.com/sf-ultralight/100/FFFFFF/search.png",
  },
  {
    name: "Reels",
    active:
      "https://img.icons8.com/external-regular-kawalan-studio/96/FFFFFF/external-new-post-social-media-regular-kawalan-studio-2.png",
    inactive:
      "https://img.icons8.com/external-regular-kawalan-studio/96/FFFFFF/external-new-post-social-media-regular-kawalan-studio-2.png",
  },
  {
    name: "Shop",
    active: "https://img.icons8.com/material-sharp/96/FFFFFF/shop.png",
    inactive: "https://img.icons8.com/material-outlined/96/FFFFFF/shop.png",
  },
  {
    name: "Profile",
    active:
      "https://scontent.fktm19-1.fna.fbcdn.net/v/t39.30808-1/307649452_632684831810330_5337391530431790098_n.jpg?stp=c0.0.160.160a_dst-jpg_p160x160&_nc_cat=105&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=KdyvPo76ibgAX-c21DE&_nc_ht=scontent.fktm19-1.fna&oh=00_AT8uFyP-z8jzd35-cf486JTfknKwAK5eoQw4-qSQy-IZYw&oe=63390358",
    inactive:
      "https://scontent.fktm19-1.fna.fbcdn.net/v/t39.30808-1/307649452_632684831810330_5337391530431790098_n.jpg?stp=c0.0.160.160a_dst-jpg_p160x160&_nc_cat=105&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=KdyvPo76ibgAX-c21DE&_nc_ht=scontent.fktm19-1.fna&oh=00_AT8uFyP-z8jzd35-cf486JTfknKwAK5eoQw4-qSQy-IZYw&oe=63390358",
  },
];

const BottomTabs = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation="vertical" />
      <View style={styles.container}>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={{ uri: bottomTabIcons[0].inactive }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={{ uri: bottomTabIcons[1].inactive }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push("NewPostScreen")}>
          <Image
            style={styles.icon}
            source={{ uri: bottomTabIcons[2].inactive }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={{ uri: bottomTabIcons[3].inactive }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={[styles.icon, styles.profilePic]}
            source={{ uri: bottomTabIcons[4].inactive }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    width: "100%",
    bottom: "0%",
    zIndex: 999,
    backgroundColor: "#000",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    paddingTop: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  profilePic: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#fff",
  },
});

export default BottomTabs;
