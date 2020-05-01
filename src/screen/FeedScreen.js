import React, { Component } from "react";

import { Center } from "./../components/Center";

import { Text, Button } from "react-native";

export default class FeedScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Center>
        <Text>Feed</Text>
        <Button
          title="Go to detail"
          onPress={() => {
            navigation.navigate("Detail");
          }}
        />
      </Center>
    );
  }
}
