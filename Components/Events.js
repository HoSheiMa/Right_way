import React, { Component } from "react";
import {
  Text as T,
  View as V,
  TouchableWithoutFeedback as Touch,
  ImageBackground as Img,
  StyleSheet,
  Dimensions,
  ScrollView as SV
} from "react-native";

import { SafeAreaView as S } from "react-navigation";
import { _retrieveData } from "./helpers/Functions";

fw = Dimensions.get("screen").width;
fh = Dimensions.get("screen").height;

import EventCard from "./assetsComponents/EventCard";
export default class Events extends Component {
  constructor() {
    super();
    this.state = {
      countryLogoUrl: null
    };
  }
  async componentWillMount() {
    var dataC = await _retrieveData("countryInfo");
    dataC = JSON.parse(dataC);
    var iso = dataC.location_[0].isoCountryCode;

    this.setState({
      countryLogoUrl: `https://www.countryflags.io/${iso}/shiny/64.png`
    });
  }
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <S
        forceInset={{
          top: "always",
          bottom: "always"
        }}
      >
        <V style={style.listCover}>
          <V style={style.nav}>
            <Touch
              onPress={() => {
                console.log("Open Drawer");
                this.props.navigation.openDrawer();
              }}
            >
              <V>
                <Img
                  style={style.nav_lsit}
                  source={require("../assets/list-nav.png")}
                ></Img>
              </V>
            </Touch>
            <T style={style.nav_Logo}> LOGO </T>
            <V style={style.navCountryCover}>
              <Img
                source={
                  this.state.countryLogoUrl == null
                    ? require("../assets/Flag_-_Unknown.png")
                    : { uri: this.state.countryLogoUrl }
                }
                style={style.navCountry}
              ></Img>
            </V>
          </V>

          <V style={style.bgCover}>
            <Img
              style={style.bg}
              source={require("../assets/undraw_gifts_btw0.png")}
            ></Img>
          </V>
          <T style={style.title}>Events</T>
          <SV style={style.eventsList}>
            <EventCard page={this.props} />
            <EventCard page={this.props} />
            <EventCard page={this.props} />
            <EventCard page={this.props} />
            <EventCard page={this.props} />
            <EventCard page={this.props} />
            <EventCard page={this.props} />
            <EventCard page={this.props} />
            <EventCard page={this.props} />
            <EventCard page={this.props} />
            <EventCard page={this.props} />
            <EventCard page={this.props} />
            <EventCard page={this.props} />
            <EventCard page={this.props} />
            <EventCard page={this.props} />
            <EventCard page={this.props} />
            <EventCard page={this.props} />
            <EventCard page={this.props} />
          </SV>
        </V>
      </S>
    );
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
  navCountryCover: {
    position: "absolute",
    width: fw,
    zIndex: -1,
    alignItems: "flex-end",
    padding: 10
  },
  navCountry: {
    width: 40,
    height: 40
  },
  bgCover: {
    width: fw,
    height: 300
  },
  bg: {
    width: "100%",
    height: "100%"
  },
  listCover: {
    width: fw,
    height: fh,
    textAlign: "center"
  },
  eventsList: {
    overflow: "scroll",
    flex: 1
  },
  title: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 23,
    textAlign: "center",
    textShadowRadius: 6,
    textShadowOffset: {
      width: 0,
      height: 3
    }
  }
});
