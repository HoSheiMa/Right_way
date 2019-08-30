import React, { Component } from "react";
import {
  View as V,
  ScrollView as SV,
  Text as T,
  StyleSheet,
  Dimensions,
  ImageBackground as Img,
  TouchableWithoutFeedback as Touch
} from "react-native";

import { SafeAreaView as S } from "react-navigation";

var fw = Dimensions.get("window").width;
var fh = Dimensions.get("window").height;

export default class fullCard extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <S
        forceInset={{
          top: "always",
          bottom: "always"
        }}
      >
        <V style={styles.Body}>
          <V style={styles.cover}>
            <Img source={null} style={styles.img}></Img>
          </V>
          <V style={styles.coverInfo}>
            <V style={styles.coverCenter}>
              <T style={styles.title}>Title</T>
              <SV style={style.scrollViewInfo}>
                <T style={styles.info}>
                  {" "}
                  info info info info info info info info info info info info
                  info info info info info info info info info info info info
                  info info info info info info info info info info info info
                  info info info info info info info info info info info info
                  info info info info info info info info info info info info
                  info info info info info info info info info info info info
                  info info info info info info info info info info info info
                  info info info info info info info info info info info info
                  info info info info info info info info info info info info
                  info info info info info info info info info info info info
                  info info info info info info info info info info info info
                  info info info info info info info info info info{" "}
                </T>
              </SV>
            </V>
          </V>
        </V>
        <V style={styles.btnGroup}>
          <V style={styles.btnJoin}>
            <T style={styles.btnJoinTitle}>Join</T>
          </V>
          <V style={styles.btnNotf}>
            <Img
              source={require("../../assets/notifications-button.png")}
              style={styles.btnNoftImage}
            ></Img>
          </V>
        </V>
      </S>
    );
  }
}
var styles = StyleSheet.create({
  Body: {
    width: fw,
    height: fh
  },
  cover: {
    width: "100%",
    height: "40%",
    justifyContent: "center",
    alignItems: "center"
  },
  img: {
    borderRadius: 8,
    width: "90%",
    height: "90%",
    backgroundColor: "#eee"
  },
  coverInfo: {
    width: "100%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center"
  },
  coverCenter: {
    width: "90%",
    height: "100%"
  },
  scrollViewInfo: {
    width: "100%",
    height: "100%"
  },
  title: {
    fontSize: 28
  },
  info: {},
  btnGroup: {
    width: fw,
    height: fh,
    flexDirection: "row",
    position: "absolute",
    alignItems: "flex-end",
    padding: 20
  },
  btnJoin: {
    height: 43,
    width: "86%",
    borderRadius: 4,
    backgroundColor: "rgba(255, 136, 101, .16)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 3
  },
  btnJoinTitle: {
    fontSize: 19
  },
  btnNotf: {
    height: 43,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(19, 105, 219, .16)",
    borderRadius: 4
  },
  btnNoftImage: {
    width: 19,
    height: 19
  }
});
