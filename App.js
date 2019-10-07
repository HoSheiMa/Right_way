import React, { Component } from "react";
import { Text, View, AppRegistry, AsyncStorage } from "react-native";
import Home from "./Components/Home";
import About from "./Components/About";
import Sign from "./Components/Sign";
import Events from "./Components/Events";
import IntroWhileProccess from "./Components/IntroWhileProccess";
import { Provider } from "react-redux";

import Store from "./Components/helpers/store/store";
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  SafeAreaView
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
    return (
      <Provider store={Store}>
        <SafeAreaView
          style={{
            flex: 1
          }}
          forceInset={{
            top: "always",
            bottom: "always"
          }}
        >
          <AppContainer />
        </SafeAreaView>
      </Provider>
    );
  }
}

// AppRegistry.registerComponent("main", () => App);
