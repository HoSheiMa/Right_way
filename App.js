import React, { Component } from "react";
import { Text, View, AppRegistry, AsyncStorage } from "react-native";
import Home from "./Components/Home";
import About from "./Components/About";
import Sign from "./Components/Sign";
import Events from "./Components/Events";
import IntroWhileProccess from "./Components/IntroWhileProccess";
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";

// AsyncStorage.clear()
console.disableYellowBox = true;

const HomeApp = createStackNavigator({
  Home: {
    screen: Home
  }
});

const SignApp = createStackNavigator({
  Sign: {
    screen: Sign
  }
});

const IntroWhileProccessApp = createStackNavigator({
  IntroWhileProccess: {
    screen: IntroWhileProccess
  }
});

AppNavigator = createSwitchNavigator(
  {
    Home: HomeApp,
    Sign: SignApp,
    IntroWhileProccess: IntroWhileProccessApp
  },
  {
    initialRouteName: "IntroWhileProccess"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

// AppRegistry.registerComponent('main',() => App);
