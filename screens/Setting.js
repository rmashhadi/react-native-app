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
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LogoTitle from "../components/LogoTitle";
export default class DetailsScreen extends React.Component {
  static navigationOptions = {
    drawerLable: "Settings",
    headerTitle: () => (
      <LogoTitle name={this.props.navigation.toggleDrawer()} />
    ),
    headerLeft: null
  };
  render() {
    return (
      <View
        style={{
          backgroundColor: "tomato"
        }}
      >
        <Text>Setting</Text>
      </View>
    );
  }
}
