import React from "react";
import LogIn from "./components/LogIn";
import ConversationList from "./components/ConversationList";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import DetailsScreen from "./screens/Setting";
import { Provider } from "react-redux";
import { createStore } from "redux";
import infoSender from "./ActionReducer/reducer";
const store = createStore(infoSender);
import HomeScreen from "./screens/HomeScreen";

// const store = createStore(infoSender);

const ConversationListNavigator = createStackNavigator(
  {
    Home: ConversationList
    // Details: DetailsScreen
  },
  {
    // initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "black"
      }
    }
  }
);
const DetailsNavigator = createStackNavigator(
  {
    Settings: DetailsScreen
    // Details: DetailsScreen
  },
  {
    // initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "black"
      }
    }
  }
);
const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: ConversationListNavigator
  },
  Details: {
    screen: DetailsNavigator
  }
});

const AppContainer = createAppContainer(MyDrawerNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
