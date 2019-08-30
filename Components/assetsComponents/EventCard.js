import React, { Component } from "react";
import {
  Text as T,
  View as V,
  ImageBackground as Img,
  StyleSheet as Css,
  Dimensions,
  TouchableWithoutFeedback as Touch
} from "react-native";

fw = Dimensions.get("screen").width;
fh = Dimensions.get("screen").height;

export default class EventCard extends Component {
  constructor() {
    super();
  }
  FullInfo = () => {
    console.log("full card info!");
    this.props.page.navigation.navigate("fullCard");
  };
  render() {
    return (
      <V style={style.cover}>
        <V style={style.card}>
          <Img style={style.cardImage}></Img>
          <V style={style.content}>
            <V>
              <T>Title..</T>
              <T>Info.....</T>
            </V>
            <V style={style.btnGroup}>
              <V style={style.btnJoin}>
                <T style={style.btnJoinTitle}>Join</T>
              </V>
              <V style={style.btnJoin}>
                <Touch onPress={this.FullInfo}>
                  <T style={style.btnJoinTitle}>More</T>
                </Touch>
              </V>
              <V style={style.btnNotf}>
                <Img
                  source={require("../../assets/notifications-button.png")}
                  style={style.btnNoftImage}
                ></Img>
              </V>
            </V>
          </V>
        </V>
      </V>
    );
  }
}

const style = Css.create({
  cover: {
    marginTop: 20,
    width: fw,
    height: 120,
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    width: fw * 0.95,
    flex: 1,
    // padding: 4,
    height: 100,
    borderRadius: 0,
    borderBottomColor: "rgba(0,0,0,.3)",
    borderBottomWidth: 1,
    transform: [
      {
        translateY: 0
      }
    ],
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  cardImage: {
    height: "84%",
    width: "30%",
    borderRadius: 12,
    backgroundColor: "silver"
  },
  content: {
    width: "63%",
    height: "80%",
    paddingLeft: 8,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  btnGroup: {
    justifyContent: "flex-end",
    flexDirection: "row"
  },
  btnJoin: {
    height: 34,
    width: 80,
    borderRadius: 4,
    backgroundColor: "rgba(255, 136, 101, .16)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 3
  },
  btnJoinTitle: {
    fontSize: 16
  },
  btnNotf: {
    width: 40,
    height: 34,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(19, 105, 219, .16)",
    borderRadius: 4
  },
  btnNoftImage: {
    width: 17,
    height: 17
  }
});
