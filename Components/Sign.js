import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  StyleSheet,
  TouchableWithoutFeedback
} from "react-native";
// import { Google } from "expo";
import * as Google from "expo-google-app-auth";
import { _storeData, _retrieveData } from "./helpers/Functions";
import FirebaseApp from "./helpers/FirebaseApp";

fw = Dimensions.get("screen").width;
fh = Dimensions.get("screen").height;
export default class Sign extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    paddingLoadPage: false,
    LocationData: null
  };

  async componentWillMount() {
    var Ldata = await _retrieveData("countryInfo");
    if (Ldata != null) {
      Ldata = JSON.parse(Ldata);
      this.setState({
        LocationData: Ldata
      });
    }
  }

  SignUpDataToCache = async data => {
    try {
      data = JSON.stringify(data); // we return data to string to can save it

      await _storeData("userData", data);

      await _storeData("logIn", "true");

      this.props.navigation.navigate("Home");
    } catch ({ message }) {
      this.setState({
        paddingLoadPage: false
      });
      console.log("GoogleSignIn.initAsync(): " + message);
    }
  };
  _signIn = async () => {
    try {
      const clientId =
        "241678977211-0j17d0u0ba7d1b5gq7jnn5nvpia7ipaf.apps.googleusercontent.com";

      var data = await Google.logInAsync({
        androidClientId: clientId
      });
      // we set a data to str.json

      data = JSON.stringify(data);

      data = JSON.parse(data);

      if (data.type == "cancel") {
        this.setState({
          paddingLoadPage: false
        });
        return;
      }

      var userId = data.user.id;

      var U_ref = FirebaseApp.firestore()
        .collection("users")
        .doc(userId);
      U_ref.get().then(snaps => {
        if (snaps.exists != true) {
          // sign in before
          console.log("Yes");
          U_ref.set({
            ...data,
            ...this.state.LocationData
          })
            .then(() => {
              console.log("Done added");
              this.SignUpDataToCache(data);
            })
            .catch(e => console.log(e));
        } else {
          // no sign in before
          console.log("No");
          this.SignUpDataToCache(data);
        }
      });
    } catch ({ message }) {
      this.setState({
        paddingLoadPage: false
      });
      console.log("GoogleSignIn.initAsync(): " + message);
    }
  };

  render() {
    return (
      <View
        style={{
          width: fw,
          height: fh
        }}
      >
        <ImageBackground
          source={require("../assets/Sign-bg.jpg")}
          style={{
            width: "100%",
            height: "100%"
          }}
        >
          <View style={Sign_style.overflowBackground}></View>
          <View style={Sign_style.SectionTop}>
            <Text style={Sign_style.bigTitle}>
              Welcome {"\n"} To Right {"\n"} Way App.
            </Text>
          </View>
          <View style={Sign_style.SectionBottom}>
            <Text style={Sign_style.SectionBottomTitle}>
              You Can Sign In With.
            </Text>
            <TouchableWithoutFeedback
              onPress={() => {
                if (this.state.paddingLoadPage == false) {
                  this.setState({
                    paddingLoadPage: true
                  });
                  this._signIn();
                }
              }}
            >
              {this.state.paddingLoadPage == false ? (
                <View style={Sign_style.GoogleBtn}>
                  <ImageBackground
                    style={Sign_style.GoogleIcon}
                    source={require("../assets/new-google-favicon-512.png")}
                  ></ImageBackground>
                  <Text style={Sign_style.GoogleText}>Sign With Google</Text>
                </View>
              ) : (
                <View style={Sign_style.GoogleBtn}>
                  <ImageBackground
                    style={Sign_style.loadingImage}
                    source={require("../assets/loading.gif")}
                  ></ImageBackground>
                </View>
              )}
            </TouchableWithoutFeedback>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

Sign_style = StyleSheet.create({
  overflowBackground: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FF8865",
    opacity: 0.4,
    position: "absolute"
  },
  bigTitle: {
    color: "#fff",
    fontSize: 54,
    fontWeight: "bold",
    textAlign: "center",
    textShadowRadius: 10,
    textShadowColor: "rgba(0,0,0,.16)",
    textShadowOffset: {
      width: 0,
      height: 3
    }
  },
  SectionTop: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "60%"
  },
  SectionBottom: {
    alignItems: "center",
    width: "100%",
    height: "40%"
  },
  SectionBottomTitle: {
    color: "#fff",
    marginBottom: 30
  },
  GoogleBtn: {
    width: 180,
    height: 50,
    backgroundColor: "#fff",
    elevation: 4,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 8
  },
  GoogleIcon: {
    width: 40,
    height: 40
  },
  GoogleText: {
    color: "#000"
  },
  loadingImage: {
    width: 30,
    height: 30
  }
});
