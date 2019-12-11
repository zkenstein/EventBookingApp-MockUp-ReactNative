import React, { Component } from "react";
import {
  Container,
  Content,
  Header,
  Left,
  Body,
  Right,
  Button,
  Title,
  Text,
  Thumbnail,
  Footer
} from "native-base";
import { StatusBar, AsyncStorage, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { Actions } from "react-native-router-flux";
import IconBadge from "react-native-icon-badge";
import Color from "../../config/colors.json";
import { UtilStyles } from "../../style/styles";

class CartModal extends Component {
  render() {
    return (
      <Container
        style={{
          alignItems: "center"
        }}
      >
        <Header
          style={{
            backgroundColor: Color.yellow_psm,
            width: "100%",
            borderBottomWidth: 0,
            elevation: 0
          }}
        >
          <Left style={{ flex: 1 }} />
          <Body
            style={{
              flex: 2,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text style={[UtilStyles.titleText, { textAlign: "center" }]}>
              Cart
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
              onPress={() => this.props.toggleCart()}
            />
          </Right>
        </Header>
        <Content
          style={{ width: "100%", padding: 20, backgroundColor: "black" }}
        >
          {/* <List>
              <ListItem itemDivider>
                <Text>Ticket</Text>
              </ListItem>
              <ListItem >
                <Left>
                  <Text> Section 306 - Row G - Seat 01</Text>
                </Left>
                <Right>
                  <Text style={UtilStyles.standardText}>RM 180.00</Text>
                </Right>
              </ListItem>
              <ListItem >
                <Left>
                  <Text> Section 306 - Row G - Seat 02</Text>
                </Left>
                <Right>
                  <Text style={UtilStyles.standardText}>RM 180.00</Text>
                </Right>
              </ListItem>

              <ListItem itemDivider>
                <Text>Add Ons</Text>
              </ListItem>
            </List> */}

          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 2, alignItems: "flex-start" }}>
              <Text
                style={[
                  UtilStyles.titleText,
                  { textAlign: "center", fontWeight: "bold", color: "white" }
                ]}
              >
                Ticket
              </Text>
              <Text style={[UtilStyles.standardText, { color: "white" }]}>
                Section 306 - Row G - Seat 01
              </Text>
              <Text style={[UtilStyles.standardText, { color: "white" }]}>
                Section 306 - Row G - Seat 02
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <Text
                style={[
                  UtilStyles.titleText,
                  { textAlign: "center", fontWeight: "bold" }
                ]}
              >
                Price
              </Text>
              <Text style={UtilStyles.standardText}>RM 180.00</Text>
              <Text style={UtilStyles.standardText}>RM 180.00</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", marginTop: 30 }}>
            <View style={{ flex: 2, alignItems: "flex-start" }}>
              <Text
                style={[
                  UtilStyles.titleText,
                  { textAlign: "center", fontWeight: "bold" }
                ]}
              >
                Add Ons
              </Text>
              <Text style={[UtilStyles.standardText, { fontWeight: "bold" }]}>
                Section 306 - Row G - Seat 01
              </Text>
              <View style={{ marginBottom: 10 }}>
                <Text style={UtilStyles.standardText}>Parking Gate A</Text>
                <Text style={UtilStyles.standardText}>
                  V Neck Shirt - Lime - Size L
                </Text>
              </View>

              <Text style={[UtilStyles.standardText, { fontWeight: "bold" }]}>
                Section 306 - Row G - Seat 02
              </Text>
              <View style={{ marginBottom: 10 }}>
                <Text style={UtilStyles.standardText}>Meal Combo 1</Text>
              </View>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <View style={{ marginTop: 40 }}>
                <Text style={UtilStyles.standardText}>RM 2.00</Text>
                <Text style={UtilStyles.standardText}>RM 24.00</Text>
              </View>
            </View>
          </View>
        </Content>

        <Footer
          style={{
            width: "100%",
            margin: 20,
            paddingHorizontal: 20,
            backgroundColor: "transparent",
            borderTopWidth: 0,
            elevation: 0
          }}
        >
          <View style={{ flex: 1, paddingRight: 5 }}>
            <Text style={UtilStyles.standardText}>TOTAL</Text>
            <Text style={[UtilStyles.titleText, { fontWeight: "bold" }]}>
              RM 360.00
            </Text>
            <Text style={UtilStyles.standardText}>Free Domestic Shipping</Text>
          </View>
          <View style={{ flex: 1, paddingLeft: 5 }}>
            <Button
              style={UtilStyles.buttonFillWidthYellow}
              onPress={() => this.closeToCheckout()}
            >
              <Left style={{ flex: 0.5 }} />
              <Body style={{ flex: 2, alignItems: "center" }}>
                <Text style={UtilStyles.buttonTextBlack}>Checkout</Text>
              </Body>
              <Right style={{ flex: 1, alignItems: "center" }}>
                <View style={UtilStyles.circleWhiteOnButton}>
                  <Icon
                    size={20}
                    style={{
                      color: "black"
                    }}
                    name="ios-arrow-forward"
                    onPress={() => this.onButtonPress()}
                  />
                </View>
              </Right>
            </Button>
          </View>
        </Footer>
      </Container>
    );
  }
}

export default CartModal;
