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
import Color from "../../config/colors.json";
import { UtilStyles } from "../../style/styles";

class TicketListHeader extends Component {
  // cart = () => {
  //   console.log("cart");
  //   this.props.cart();
  // };

  onButtonPress = () => {
    Actions.MyAccount();
  };

  render() {
    return (
      <Header
        style={[
          UtilStyles.headerTitleOnly,
          { borderBottomWidth: 0, elevation: 0 }
        ]}
      >
        <StatusBar backgroundColor={Color.yellow_psm} barStyle="dark-content" />
        <Container
          style={{
            flexDirection: "row",
            marginTop: -30,
            marginBottom: -50,
            backgroundColor: "transparent"
          }}
        >
          <Left style={{ flex: 1 }}>
            <Icon
              size={25}
              style={{
                width: 30,
                height: 30,
                margin: 6,
                color: "black",
                marginTop: 10,
                marginLeft: 20
              }}
              name="ios-arrow-back"
              onPress={() => Actions.pop()}
            />
          </Left>
          <Body style={{ flex: 2 }}>
            <Text style={[UtilStyles.titleText, { textAlign: "center" }]}>
              {this.props.header_text}
            </Text>
          </Body>
          <Right style={{ flex: 1, flexDirection: "row" }} />
        </Container>
      </Header>
    );
  }
}

export default TicketListHeader;
