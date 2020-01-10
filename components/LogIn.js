import React, { Component } from "react";
import { AsyncStorage } from "react-native";

import axios from "axios";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableHighlight
} from "react-native";

export default class LogIn extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      passWord: ""
    };
  }

  handleLogIn() {
    this.props.navigation.navigate("Conversation");
    axios
      .post("http://click.7grid.ir/auth/signin/", {
        email: this.state.userName,
        password: this.state.passWord
      })
      .then(res => {
        AsyncStorage.setItem("MyId", res.data.data.profile.id);
        console.log("AsyncStorage", AsyncStorage.getItem("MyId"));
        AsyncStorage.setItem("token", res.data.data.token);
        console.log("AsyncStorage", AsyncStorage.getItem("token"));
        // this.props.navigation.navigate("Details");
      })

      .catch(function(error) {
        console.log(error);
      });
  }

  onChange1(e) {
    this.setState({ userName: e });
  }
  onChange2(e) {
    this.setState({ passWord: e });
  }
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.mybody}>
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={{
              uri:
                "data:image/png;base64,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"
            }}
          />

          <TextInput
            placeholder="USER NAME"
            type="text"
            value={this.state.userName}
            onChangeText={e => this.onChange1(e)}
            style={styles.UserPass}
          />
          <TextInput
            placeholder="PASS WORD"
            type="password"
            value={this.state.passWord}
            onChangeText={e => this.onChange2(e)}
            style={styles.UserPass}
          />
          <View style={styles.buttons}>
            <Button
              color="rgb(20, 4, 241)"
              title="Log In"
              onPress={() => this.handleLogIn()}
            />
          </View>
          <TouchableHighlight
            style={styles.highlights}
            onPress={() => console.log("forgot password")}
            underlayColor="red"
          >
            <Text style={styles.texts}>FORGOT PASSWORD?</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(246, 246, 246, 0.568)",
    alignSelf: "center",
    justifyContent: "space-evenly",
    height: "50%",
    width: 200
  },
  mybody: {
    backgroundColor: "black",
    height: "100%",
    justifyContent: "center"
  },
  logo: {
    width: 60,
    height: 60,
    // borderRadius: 0.5,
    alignSelf: "center"
  },
  UserPass: {
    width: "80%",
    backgroundColor: "snow",
    borderRadius: 0.05,
    height: 40,
    alignSelf: "center",
    padding: 12
  },
  highlights: {
    borderRadius: 0.2,
    width: "60%",

    alignSelf: "center"
  },
  texts: {
    alignSelf: "center",
    fontSize: 10
  },
  buttons: {
    width: "80%",
    borderRadius: 0.05,
    alignSelf: "center"
  }
});
