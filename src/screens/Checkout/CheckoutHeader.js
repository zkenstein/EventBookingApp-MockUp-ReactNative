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
import { UtilStyles } from "../../style/styles";
import Color from "../../config/colors.json";

class CheckoutHeader extends Component {
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
          <Left style={{ flex: 1 }} />
          <Body style={{ flex: 2 }}>
            <Text style={[UtilStyles.titleText, { textAlign: "center" }]}>
              Checkout
            </Text>
          </Body>
          <Right style={{ flex: 1 }}>
            <Icon
              size={25}
              style={{
                color: "black",
                marginRight: 10
              }}
              name="md-close"
              onPress={() => Actions.pop()}
            />
          </Right>
        </Container>
      </Header>
    );
  }
}

export default CheckoutHeader;
