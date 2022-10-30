import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { View, StyleSheet, StatusBar } from "react-native";
import BottomTabs from "../components/home/BottomTabs";
import Header from "../components/home/Header";
import Post from "../components/home/Post";
import Stories from "../components/home/Stories";
import { POSTS } from "../data/posts";
import { db } from "../firebase";

const HomeScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collectionGroup("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((post) => ({ id: post.id, ...post.data() })));
    });
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <Stories />
      <ScrollView style={{ marginBottom: 30 }}>
        {posts.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
      <BottomTabs navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});

export default HomeScreen;
