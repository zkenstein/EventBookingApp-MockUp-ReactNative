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
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/Ionicons";

import { Actions } from "react-native-router-flux";
import IconBadge from "react-native-icon-badge";
import Color from "../../config/colors.json";
import { UtilStyles } from "../../style/styles";

class CartHeader extends Component {
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
        style={[UtilStyles.headerSmall, { borderBottomWidth: 0, elevation: 0 }]}
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
            <Icon2
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
              Add-Ons
            </Text>
            {/* <Text
              style={[
                UtilStyles.titleText,
                { textAlign: "center", fontWeight: "bold" }
              ]}
            >
              RM 360.00
            </Text> */}
          </Body>
          <Right style={{ flex: 1, flexDirection: "row-reverse" }}>
            {/* <Button transparent>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <IconBadge
                  MainElement={
                    <Icon
                      size={25}
                      style={{
                        width: 30,
                        height: 30,
                        margin: 6,
                        color: "black",
                        marginTop: 10
                      }}
                      name="shopping-cart"
                    />
                  }
                  BadgeElement={
                    <Text
                      style={{
                        color: "white",
                        marginLeft: -15,
                        textAlign: "center",
                        fontSize: 8,
                        alignSelf: "flex-start"
                      }}
                    >
                      1
                    </Text>
                  }
                  IconBadgeStyle={{
                    width: 15,
                    height: 20,
                    backgroundColor: Color.material_red_400
                  }}
                  Hidden={this.props.count == 0}
                />
              </View>
            </Button> */}
          </Right>
        </Container>
      </Header>
    );
  }
}

export default CartHeader;
