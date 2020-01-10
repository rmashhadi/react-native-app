import React, { Component } from "react";
import LogoTitle from "./LogoTitle";
import { AsyncStorage } from "react-native";
import { connect } from "react-redux";
import axios from "axios";
import { conversationListFromServer } from "../ActionReducer/action";
import ConversationListName from "./ConversationListName";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableHighlight
} from "react-native";

class ConversationList extends React.Component {
  static navigationOptions = {
    drawerLable: "Conversation",
    headerTitle: () => <LogoTitle />,
    headerLeft: null
  };
  constructor() {
    super();
    this.state = {
      MyId: ""
    };
  }
  async retarded() {
    let id = await AsyncStorage.getItem("MyId");
    this.setState({ MyId: id });
    let token = await AsyncStorage.getItem("token");
    axios
      .get("http://click.7grid.ir/conversation/", {
        params: {
          token: token
        }
      })
      .then(res => {
        console.log("conversationList", res.data.data.conversation_details);
        this.props.dispatch(
          conversationListFromServer(res.data.data.conversation_details)
        );
      })

      .catch(function(error) {
        console.log(error);
      });
  }
  componentDidMount() {
    this.retarded();
  }
  render() {
    return (
      <View style={{ backgroundColor: "purple" }}>
        {this.props.convList.map(convList => {
          if (convList.users[0].id !== this.state.id) {
            return (
              <ConversationListName
                // key={convList.users[1].id}
                id={convList.users[1].id}
                latestMsg={convList.latestMsg}
                searching="no"
                conversation_id={convList.id}
              />
            );
          } else {
            return (
              <ConversationListName
                // key={convList.users[0].id}
                id={convList.users[0].id}
                latestMsg={convList.latestMsg}
                searching="no"
                conversation_id={convList.id}
              />
            );
          }
        })}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  Pic: state.Pic,
  UserId: state.UserId,
  lastMsg: state.lastMsg,
  Email: state.Email,
  convList: state.convList
});
const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(ConversationList);
