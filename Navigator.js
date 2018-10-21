import React from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
import { createStackNavigator } from "react-navigation";

import Post from "./component/Post";
import NewPost from "./component/NewPost";
import Posts from "./component/Posts";
import navStyles from "./styles/navStyles";

class Home extends React.Component {
  static navigationOptions = {
    title: "Home",
    ...navStyles
  };

  goToPost = () => {
    this.props.navigation.navigate("Post");
  };

  newPost = () => {
    this.props.navigation.navigate("NewPost");
  };

  render() {
    return (
      <View style={styles.container}>
        <Posts {...this.props} />
        <TouchableHighlight onPress={this.newPost} style={styles.newPost}>
          <Text style={styles.newPostText}>New Post +</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between"
  },
  newPost: {
    backgroundColor: "#82D8D8",
    padding: 20
  },
  newPostText: {
    fontSize: 20,
    textAlign: "center"
  }
});

export default createStackNavigator({
  Home: {
    screen: Home
  },
  Post: {
    screen: Post
  },
  NewPost: {
    screen: NewPost
  }
});