import React, { Component } from "react";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableHighlight
} from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";
import LogoTitle from "../components/LogoTitle";
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Home",
    headerTitle: () => (
      <LogoTitle name={this.props.navigation.toggleDrawer()} />
    ),
    headerLeft: null
  };

  render() {
    return (
      <View
        style={{
          backgroundColor: "yellow"
        }}
      >
        <Text>Home Screen</Text>
        <Button
          title="OPEN"
          onPress={() => this.props.navigation.toggleDrawer()}
        />
      </View>
    );
  }
}
