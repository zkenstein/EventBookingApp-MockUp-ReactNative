import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Title,
  Text,
  Thumbnail
} from "native-base";
import { StatusBar, AsyncStorage, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/EvilIcons";

import { Actions } from "react-native-router-flux";
import IconBadge from "react-native-icon-badge";
import Color from "../config/colors.json";
import { UtilStyles } from "../style/styles";

class FloatingBackButton extends Component {
  render() {
    return (
      //   <Header>
      //     <StatusBar backgroundColor={"transparent"} translucent />
      <Button
        onPress={() => Actions.pop()}
        style={{
          width: 40,
          height: 40,
          paddingLeft: 12,
          marginRight: 30,
          position: "absolute",
          top: 55,
          left: 20,
          backgroundColor: Color.yellow_psm,
          alignSelf: "flex-start"
        }}
      >
        <Icon
          size={25}
          name="ios-arrow-back"
          color="black"
          style={{ marginLeft: 2 }}
        />
      </Button>
      //   </Header>
    );
  }
}

export default FloatingBackButton;
