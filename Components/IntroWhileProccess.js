import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Animated
} from "react-native";
import { SafeAreaView } from "react-navigation";
import { _retrieveData, _storeData } from "../Components/helpers/Functions";
import { createStackNavigator, createAppContainer } from "react-navigation";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
fw = Dimensions.get("screen").width;
fh = Dimensions.get("screen").height;

export default class IntroWhileProccess extends Component {
  constructor() {
    super();
    this.state = {
      errorLocation: false
    };
  }
  async componentDidMount() {
    // we get info about location
    let { status } = await Permissions.askAsync(Permissions.LOCATION);

    if (status !== "granted") {
      this.setState({
        errorLocation: true
      });
      return;
    }

    let location = await Location.getCurrentPositionAsync({});

    let location_ = await Location.reverseGeocodeAsync({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    });

    // console.log(location, location_);

    await _storeData(
      "countryInfo",
      JSON.stringify({ location: location, location_: location_ })
    );
    // check if log in or not
    // we look for asyncStore 'logIn'
    logIn = await _retrieveData("logIn");

    if (logIn != "true") {
      // if not log in before
      setTimeout(() => {
        this.props.navigation.navigate("Sign");
      }, 1000);
    } else {
      this.props.navigation.navigate("Home");
    }
  }

  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <SafeAreaView
        style={{
          width: fw,
          height: fh
        }}
        forceInset={{
          top: "always",
          bottom: "always"
        }}
      >
        {this.state.errorLocation ? (
          <View style={style.messageCover}>
            <View style={style.message}>
              <ImageBackground
                style={{ height: 30, width: 30 }}
                source={require("../assets/warning-icons-143676-4978403.png")}
              ></ImageBackground>
              <Text style={style.messageText}>
                Please help us to get info about your location to help you find
                best events
              </Text>
            </View>
          </View>
        ) : (
          <View></View>
        )}
        <View style={style.Container}>
          <ImageBackground
            source={require("../assets/Sign-bg.jpg")}
            style={style.cover}
          ></ImageBackground>

          <View style={style.overflowBackground}></View>
        </View>
        <View style={style.LoadingCover}>
          <ImageBackground
            style={style.Loading}
            source={require("../assets/loading.gif")}
          ></ImageBackground>
        </View>
      </SafeAreaView>
    );
  }
}

style = StyleSheet.create({
  Container: {
    width: fw,
    height: fh,
    position: "absolute"
  },
  cover: {
    width: fw,
    height: fh,
    position: "absolute",
    top: 0,
    left: 0
  },
  overflowBackground: {
    width: fw,
    height: fh,
    backgroundColor: "#FF8865",
    opacity: 0.4,
    position: "absolute"
  },

  messageCover: {
    position: "absolute",
    zIndex: 1,
    marginTop: "10%",
    flexDirection: "column",
    alignItems: "center",
    width: fw
    // height: fh
  },
  message: {
    backgroundColor: "#fff",
    width: fw * 0.9,
    borderRadius: 4,
    padding: 8,
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 2,
    flexDirection: "row"
  },
  messageText: {
    width: "90%",
    textAlign: "center",
    color: "#ffbb33",
    fontSize: 18,
    textShadowColor: "rgba(0, 0, 0, .4)",
    textShadowRadius: 1
  },
  LoadingCover: {
    width: fw,
    height: fh,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 50
  },
  Loading: {
    width: 40,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 300
  }
});
