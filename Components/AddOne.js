import React, { Component } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Animated,
  Picker,
  TouchableWithoutFeedback,
  Easing
} from "react-native";
import {
  ScrollView,
  Switch,
  PanGestureHandler
} from "react-native-gesture-handler";

import AwesomeButton from "react-native-really-awesome-button";
import AwesomeButtonRick from "react-native-really-awesome-button/src/themes/blue";

import { SafeAreaView } from "react-navigation";
fw = Dimensions.get("screen").width;
fh = Dimensions.get("screen").height;

export default class AddOne extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      popUpTop: new Animated.Value(fh),
      fadeOutBody: new Animated.Value(1),

      typeof: null,
      orderRequirs: {
        time: "1 day",
        notf: false
      }
    };
  }

  _startPopUp = () => {
    Animated.timing(this.state.popUpTop, {
      toValue: this.state.typeof != null ? fh : 0, // toggle animation
      duration: 400
    }).start();
  };

  _startFadeOut = () => {
    Animated.timing(this.state.fadeOutBody, {
      toValue: this.state.typeof != null ? 1 : 0.1, // toggle animation
      duration: 300
    }).start();
  };

  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            if (this.state.typeof != null) {
              // console.log("here");
              this._startPopUp();
              this._startFadeOut();
              this.setState({
                typeof: null
              });
            }
          }}
        >
          <Animated.View
            style={[
              {
                opacity: this.state.fadeOutBody
              },
              {
                zIndex: -1,
                width: fw,
                height: fh
              }
            ]}
          >
            <View style={style.topGoals}>
              <Text style={style.topGoalsText}> Top Goals </Text>
            </View>

            <ScrollView>
              <View style={style.coverGoalCard}>
                <View style={style.goalCard}>
                  <ImageBackground
                    style={style.goalCardImg}
                    source={require("./../assets/praying.png")}
                  ></ImageBackground>
                  <View style={style.goalCardInfo}>
                    <Text style={style.goalCardTitle}>Praying</Text>
                    <Text style={style.goalCardInfoInfo}>
                      Praying to allah is the important think in the world
                      should any muslim do it.
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    if (this.state.typeof == null) {
                      this._startFadeOut();
                      this._startPopUp();
                      this.setState({
                        typeof: "praying"
                      });
                    }
                  }}
                >
                  <View style={style.btnAdd}>
                    <Text style={style.btnAddText}>+</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </Animated.View>
        </TouchableWithoutFeedback>
        <Animated.View
          style={[
            style.popCover,
            {
              top: this.state.popUpTop
            }
          ]}
        >
          <View style={style.popUp}>
            {/**
            praying part 
            we should have a 3 Requirements
            1 - goal time {day|week|manth}
            2 - notification you or not
            3 - 
        */}
            <View style={style.popUpSection}>
              <View style={style.popUpSection_0}>
                <Text style={style.popUpSectionTitle}>Goal time</Text>
              </View>
              <View style={style.popUpSection_1}>
                <Picker
                  selectedValue={this.state.orderRequirs.time}
                  style={{ height: 50, width: 120 }}
                  onValueChange={(itemValue, itemIndex) => {
                    this.state.orderRequirs.time = itemValue;
                    this.forceUpdate();
                  }}
                >
                  <Picker.Item label="1 day" value="1 day" />
                  <Picker.Item label="1 week" value="1 week" />
                  <Picker.Item label="1 month" value="1 month" />
                </Picker>
              </View>
            </View>
            <View style={style.popUpSection}>
              <View style={style.popUpSection_0}>
                <Text style={style.popUpSectionTitle}>notification</Text>
              </View>

              <View style={style.popUpSection_1}>
                <Switch value={true}></Switch>
              </View>
            </View>

            <View
              style={{
                width: "100%",
                height: "100%",
                justifyContent: "space-evenly",
                alignItems: "flex-end",
                padding: 8,
                flexDirection: "row-reverse",
                position: "absolute"
              }}
            >
              <AwesomeButtonRick
                type="secondary"
                width={fw * 0.4}
                progress
                borderColor="#00C851"
                backgroundDarker="#007E33"
                textColor="#2E2E2E"
                onPress={next => {
                  /** Do Something **/
                  this._startPopUp();
                  this._startFadeOut();
                  this.setState({
                    typeof: null
                  });
                  next();
                }}
              >
                Ok!
              </AwesomeButtonRick>
              <AwesomeButtonRick
                type="secondary"
                width={fw * 0.4}
                progress
                borderColor="#ff4444"
                backgroundDarker="#CC0000"
                textColor="#CC0000"
                onPress={next => {
                  if (this.state.typeof != null) {
                    // console.log("here");
                    this._startPopUp();
                    this._startFadeOut();
                    this.setState({
                      typeof: null
                    });
                    next();
                  }
                }}
              >
                Cancel!
              </AwesomeButtonRick>
            </View>
          </View>
        </Animated.View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  topGoals: {
    alignItems: "center",
    marginTop: 20
  },
  topGoalsText: {
    fontSize: 24,
    color: "#2E2E2E",
    fontWeight: "bold"
  },
  coverGoalCard: {
    width: fw,
    height: 120,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  goalCard: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderRadius: 4,
    width: "80%",
    height: "80%",
    backgroundColor: "#f8f9fa",
    alignItems: "center",
    justifyContent: "center"
  },
  goalCardImg: {
    width: 50,
    height: 50
  },
  goalCardTitle: {
    fontSize: 21
  },
  goalCardInfo: {
    width: "80%"
  },
  goalCardInfoInfo: {
    fontSize: 14
  },
  btnAdd: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 500,
    borderWidth: 2,
    borderColor: "#00C851"
  },
  btnAddText: {
    fontSize: 21,
    color: "#00C851"
  },
  popCover: {
    position: "absolute",
    width: "100%",
    height: "100%",
    // backgroundColor: "#000",

    zIndex: -1,
    justifyContent: "flex-end"
  },
  popUp: {
    width: "100%",
    height: 260,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    shadowColor: "rgba(0, 0, 0, .3)",
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 3
  },
  popUpSection: {
    width: "100%",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  popUpSectionTitle: {
    fontSize: 18,
    textAlign: "center",
    width: "100%"
  },
  popUpSection_0: {
    width: "60%"
  },
  popUpSection_1: {
    width: "40%",
    alignItems: "center"
  }
});
