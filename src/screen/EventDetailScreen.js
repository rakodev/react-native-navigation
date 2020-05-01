import React, { Component } from "react";

import { Center } from "./../components/Center";

import { Text, Button } from "react-native";

export default class EventDetailScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Center>
        <Text>Detail</Text>
        <Button
          title="Go Back"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </Center>
    );
  }
}
