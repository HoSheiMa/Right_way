import React, { Component } from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableWithoutFeedback,
  ScrollView
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { getUserData } from "./helpers/userData";
import {
  createAppContainer,
  createDrawerNavigator,
  SafeAreaView,
  createStackNavigator
} from "react-navigation";
import HomeCard from "./assetsComponents/HomeCard";
import Events from "./Events";
import fullCard from "./assetsComponents/fullCard";

fw = Dimensions.get("screen").width;
fh = Dimensions.get("screen").height;

class Home_ extends Component {
  async componentWillMount() {
    var data = await getUserData(["givenName", "photoUrl"]);
    this.setState(data);
  }
  state = {
    givenName: "",
    photoUrl: null
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
        <View style={style.nav}>
          <TouchableWithoutFeedback
            onPress={() => {
              console.log("Open Drawer");
              this.props.navigation.openDrawer();
            }}
          >
            <View>
              <ImageBackground
                style={style.nav_lsit}
                source={require("../assets/list-nav.png")}
              ></ImageBackground>
            </View>
          </TouchableWithoutFeedback>
          <Text style={style.nav_Logo}> LOGO </Text>
        </View>
        <LinearGradient
          style={style.box_profile}
          start={[0, 0]}
          end={[1, 1]}
          colors={["#FF9966", "#FF5E62"]}
        >
          <View>
            <ImageBackground
              imageStyle={{
                borderRadius: 3000,
                zIndex: 1
              }}
              style={style.box_profile_img}
              source={
                this.state.photoUrl == null
                  ? require("../assets/loading.gif")
                  : {
                      uri: this.state.photoUrl
                    }
              }
            ></ImageBackground>
            <Text style={style.box_profile_name}> {this.state.givenName} </Text>
          </View>

          <View style={style.overflow_box}>
            <View style={style.overflow_box_view_circle}>
              <View style={style.overflow_box_circle}>
                <ImageBackground
                  style={style.overflow_box_circle_image}
                  source={require("../assets/journalism.png")}
                ></ImageBackground>
              </View>
              <View style={style.overflow_box_circle}>
                <ImageBackground
                  style={style.overflow_box_circle_image}
                  source={require("../assets/youtube.png")}
                ></ImageBackground>
              </View>
            </View>
          </View>
        </LinearGradient>
        <View style={style.goalsBox}>
          <Text style={style.goalsBox_Title}> Goals </Text>
          <ScrollView style={style.goalsBox_scrollView}>
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

Events_N = createStackNavigator({
  Events: {
    screen: Events
  },
  fullCard: {
    screen: fullCard
  }
});

const MyDrawerNavigator = createDrawerNavigator({
  Events: {
    screen: Events_N
  },
  Home: {
    screen: Home_
  }
});

const MyApp = createAppContainer(MyDrawerNavigator);

export default class Home extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return <MyApp />;
  }
}

const style = StyleSheet.create({
  nav: {
    width: fw,
    height: 50,
    backgroundColor: "#FF8865",
    elevation: 6,
    flexDirection: "row",
    alignItems: "center"
  },
  nav_lsit: {
    width: 25,
    height: 20,
    marginLeft: 20
  },
  nav_Logo: {
    width: fw,
    zIndex: -1,
    position: "absolute",
    textAlign: "center",
    fontSize: 21,
    color: "#fff",
    textShadowColor: "rgba(0,0,0,.16)",
    textShadowRadius: 6,
    textShadowOffset: {
      width: 0,
      height: 3
    }
  },
  box_profile: {
    width: fw,
    justifyContent: "center",
    alignItems: "center",
    height: 160
  },
  box_profile_img: {
    width: 80,
    height: 80,
    borderRadius: 300,
    elevation: 4,
    marginBottom: 15
  },
  box_profile_name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 23,
    textAlign: "center",
    textShadowRadius: 6,
    textShadowOffset: {
      width: 0,
      height: 3
    }
  },
  overflow_box: {
    position: "absolute",
    width: fw,
    paddingLeft: 50,
    paddingRight: 50,
    height: 160,
    justifyContent: "flex-end"
    // backgroundColor: 'blue'
  },
  overflow_box_view_circle: {
    flexDirection: "row",
    // backgroundColor: 'red',
    justifyContent: "space-between"
  },
  overflow_box_circle: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 3000,
    elevation: 4,
    position: "relative",
    top: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  overflow_box_circle_image: {
    width: 30,
    height: 30
  },
  goalsBox: {
    paddingTop: 30,
    width: fw,
    flex: 1
  },
  goalsBox_Title: {
    color: "#212121",
    fontWeight: "bold",
    fontSize: 26,
    textAlign: "center",
    textShadowRadius: 16,
    textShadowOffset: {
      width: 0,
      height: 3
    }
  },
  goalsBox_scrollView: {
    overflow: "scroll",
    flex: 1
  }
});
