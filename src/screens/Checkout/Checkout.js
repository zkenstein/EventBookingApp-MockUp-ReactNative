import React, { Component } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import {
  Button,
  ListItem,
  Left,
  Right,
  Body,
  Footer,
  Input
} from "native-base";
import CheckoutHeader from "./CheckoutHeader";
import { UtilStyles } from "../../style/styles";
import Color from "../../config/colors.json";
import Icon from "react-native-vector-icons/Ionicons";
import { Actions } from "react-native-router-flux";
import Icon2 from "react-native-vector-icons/FontAwesome";

export default class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("checkout for ", this.props.item);
    console.log("data pass ", this.props.data);
  }

  renderItems() {
    console.log("hwakd ", this.props.data.title);
    return (
      <ListItem
        style={{
          backgroundColor: "transparent",
          marginLeft: 0,
          marginBottom: 10
        }}
        // onPress={() => Actions.Payment()}
      >
        <Left style={{ flex: 1 }}>
          <Image
            style={{
              width: 90,
              height: 110
            }}
            source={this.props.data.image}
          />
        </Left>
        <Body style={{ flex: 2, borderBottomWidth: 0 }}>
          <Text style={[UtilStyles.standardText, { fontWeight: "bold" }]}>
            {this.props.data.title}
          </Text>
          <Text style={[UtilStyles.standardText, { fontWeight: "bold" }]}>
            {this.props.data.desc}
          </Text>
          <View style={{ marginBottom: 10 }}>
            <Text style={UtilStyles.standardText}>
              {this.props.data.rentType} 1
            </Text>
          </View>
          <Text
            style={[
              UtilStyles.titleText,
              { fontWeight: "bold", color: "grey" }
            ]}
          >
            {this.props.data.price}
          </Text>
        </Body>
      </ListItem>
    );
  }

  render() {
    return (
      <View style={[UtilStyles.containerJustifyCenter]}>
        <CheckoutHeader rkCardImgOverlay />

        <ScrollView
          automaticallyAdjustContentInsets={true}
          style={[UtilStyles.container, { margin: 20 }]}
        >
          <View>
            <Text style={[UtilStyles.standardText, { fontWeight: "bold" }]}>
              Payment Method
            </Text>
            <ListItem
              style={{
                backgroundColor: "transparent",
                marginLeft: 0,
                marginBottom: 10
              }}
              onPress={() => Actions.Payment()}
            >
              <Left style={{ flex: 1 }}>
                <Image
                  style={{ width: 80, height: 50 }}
                  source={require("../../images/creditcard.png")}
                />
              </Left>
              <Body style={{ flex: 2, borderBottomWidth: 0 }}>
                <Text style={[UtilStyles.standardText, { fontWeight: "bold" }]}>
                  MasterCard ending **00
                </Text>
              </Body>
              <Right style={{ alignItems: "flex-end" }}>
                <View style={UtilStyles.circleGreyOnButton}>
                  <Icon
                    size={20}
                    style={{
                      color: Color.material_grey_600
                    }}
                    name="ios-arrow-forward"
                  />
                </View>
              </Right>
            </ListItem>
          </View>

          <View>
            <Text style={[UtilStyles.standardText, { fontWeight: "bold" }]}>
              Items
            </Text>

            {this.props.item === "event" ? (
              <ListItem
                style={{
                  backgroundColor: "transparent",
                  marginLeft: 0,
                  marginBottom: 10
                }}
              >
                <Left style={{ flex: 1 }}>
                  <Image
                    style={{
                      width: 90,
                      height: 130
                    }}
                    source={require("../../images/ct2.jpg")}
                  />
                </Left>
                <Body style={{ flex: 2, borderBottomWidth: 0 }}>
                  <Text
                    style={[UtilStyles.standardText, { fontWeight: "bold" }]}
                  >
                    Event Title
                  </Text>
                  <Text
                    style={[UtilStyles.standardText, { fontWeight: "bold" }]}
                  >
                    Section 306 - Row G - Seat 01
                  </Text>
                  <View style={{ marginBottom: 10 }}>
                    <Text style={UtilStyles.standardText}>Parking Gate A</Text>
                    <Text style={UtilStyles.standardText}>
                      V Neck Shirt - Lime - Size L
                    </Text>
                  </View>
                  <Text
                    style={[
                      UtilStyles.titleText,
                      { fontWeight: "bold", color: "grey" }
                    ]}
                  >
                    RM 360.00
                  </Text>
                </Body>
              </ListItem>
            ) : (
              <View>{this.renderItems()}</View>
            )}
          </View>

          <View>
            <ListItem
              style={{
                backgroundColor: "transparent",
                marginLeft: 0,
                marginBottom: 10
              }}
              onPress={() => Actions.Payment()}
            >
              {/* <Left> */}
              <Icon2
                size={20}
                style={{
                  color: Color.yellow_psm,
                  paddingHorizontal: 20
                }}
                name="tag"
              />
              <Input
                style={UtilStyles.formInputStandard}
                placeholder="Add Promo Code"
                placeholderTextColor={Color.yellow_psm}
                // onChangeText={val => this.onChangeText("email", val)}
                // value={this.state.email}
              />
            </ListItem>
          </View>
        </ScrollView>

        <Footer
          style={{
            width: "100%",
            height: 80,
            paddingHorizontal: 20,
            paddingTop: 10,
            backgroundColor: "white",
            borderTopWidth: 0,
            elevation: 0
          }}
        >
          {/* <View style={{ marginVertical: 20 , flexDirection: "row"}}> */}
          <View style={{ flex: 1, paddingRight: 5, paddingBottom: 10 }}>
            <Text style={[UtilStyles.standardText, { color: "grey" }]}>
              TOTAL
            </Text>
            <Text style={[UtilStyles.titleText, { fontWeight: "bold" }]}>
              RM 360.00
            </Text>
            <Text style={UtilStyles.standardText}>Free Domestic Shipping</Text>
          </View>
          <View style={{ flex: 1, paddingLeft: 5, paddingBottom: 10 }}>
            <Button
              style={UtilStyles.buttonFillWidthYellow}
              onPress={() => Actions.OrderSuccess()}
            >
              <Left style={{ flex: 0.5 }} />
              <Body style={{ flex: 2, alignItems: "center" }}>
                <Text style={UtilStyles.buttonTextBlack}>Place Order</Text>
              </Body>
              <Right style={{ flex: 1, alignItems: "center" }}>
                <View style={UtilStyles.circleWhiteOnButton}>
                  <Icon
                    size={20}
                    style={{
                      color: "black"
                    }}
                    name="ios-arrow-forward"
                  />
                </View>
              </Right>
            </Button>
          </View>
          {/* </View> */}
        </Footer>
      </View>
    );
  }
}
