import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

export default class ConversationListName extends Component {
  render() {
    return (
      <View>
        <TouchableHighlight onPress={() => console.log("convList clicked")}>
          <View style={styles.container}>
            <Image
              style={styles.logo}
              source={{
                uri:
                  "data:image/jpeg;base64,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"
              }}
            />
            <View style={styles.details}>
              <Text style={styles.texts}>ID: {this.props.id}</Text>
              <Text style={styles.texts}>Last Message</Text>
            </View>
            <View style={styles.timeBox}>
              <Text style={styles.texts}>yesterdayy</Text>
              <Text style={styles.texts}>
                <Icon name="pushpin" size={15} />
              </Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "purple",
    alignSelf: "center",
    justifyContent: "space-between",
    height: 55,
    width: "100%",
    paddingLeft: 10,

    borderBottomWidth: 1,
    flexDirection: "row",
    paddingBottom: 5,
    alignItems: "center"
  },

  logo: {
    width: 45,
    height: 45,
    // borderRadius: "50%",
    marginRight: 10,
    marginTop: 5
  },
  details: {
    width: "65%",

    marginRight: 10
  },
  timeBox: {
    marginRight: 10
  },
  texts: {
    marginTop: 10,
    color: "snow"
  }
});
