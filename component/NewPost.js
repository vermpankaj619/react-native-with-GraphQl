import React, { Component } from "react";
import { Text, View } from "react-native";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import PostForm from "./PostForm";

class NewPost extends Component {
  newPost = ({ title, body }) => {
    this.props
      .newPost({
        variables: {
          title,
          body
        }
      })
      .then(() => {})
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <View>
        <PostForm onSubmit={this.newPost} />
      </View>
    );
  }
}

const newPost = gql`
  mutation newPost($title: String!, $body: String!) {
    createPost(title: $title, body: $body) {
      id
    }
  }
`;

export default graphql(newPost, {
  name: "newPost"
})(NewPost);
