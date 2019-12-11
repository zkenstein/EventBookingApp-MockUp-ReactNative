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
import Icon2 from "react-native-vector-icons/FontAwesome";

import { Actions } from "react-native-router-flux";
import IconBadge from "react-native-icon-badge";
import Color from "../../config/colors.json";
import { UtilStyles } from "../../style/styles";

class MyPurchaseHeader extends Component {
  onHome = () => {
    // Actions.pop();
    Actions.Home({ type: "replace", text: "donePayment" });
    // Actions.Home({ text: "donePayment" });
  };

  renderBackButton = () => {
    console.log("backButton", this.props.backButton);
    if (this.props.backButton) {
      return (
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
      );
    }
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
          {this.renderBackButton()}

          <Body style={{ flex: 2 }}>
            <Text style={[UtilStyles.titleText, { textAlign: "center" }]}>
              {this.props.title}
            </Text>
          </Body>
          <Right style={{ flex: 1, alignItems: "flex-end" }}>
            {/* <Icon2
              size={25}
              color="black"
              name="home"
              onPress={() => this.onHome()}
              style={{ marginRight: 20 }}
            /> */}
          </Right>
        </Container>
      </Header>
    );
  }
}

export default MyPurchaseHeader;
