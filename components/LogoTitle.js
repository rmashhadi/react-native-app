import React, { Component } from "react";

import Icon from "react-native-vector-icons/FontAwesome";

import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

export default class LogoTitle extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <TouchableHighlight
          onPress={() => this.props.name}
          underlayColor="lightgray"
          style={{
            // borderRadius: "50%",
            width: 35,
            paddingLeft: 5,
            marginLeft: -2.5
          }}
        >
          <Text style={{ marginTop: 1.5, color: "snow" }}>
            <Icon name="bars" size={30} />
          </Text>
        </TouchableHighlight>
        <Text style={{ color: "snow", fontSize: 30, fontWeight: "bold" }}>
          Wire
        </Text>
        <TouchableHighlight
          onPress={() => console.log("search clicked")}
          underlayColor="lightgray"
          style={{
            // borderRadius: "50%",
            width: 35,
            paddingLeft: 2
          }}
        >
          <Text
            style={{
              marginTop: 1.5,
              color: "snow"
            }}
          >
            <Icon name="search" size={30} />
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    backgroundColor: "black",
    paddingVertical: 5
  }
});
