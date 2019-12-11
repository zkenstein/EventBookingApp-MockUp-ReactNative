import React, { Component } from "react";
import { View, Text, ScrollView, Image, FlatList } from "react-native";
import {
  Button,
  ListItem,
  Left,
  Right,
  Body,
  Footer,
  List,
  Input
} from "native-base";
import CheckoutHeader from "./CheckoutHeader";
import { UtilStyles } from "../../style/styles";
import Color from "../../config/colors.json";
import Icon from "react-native-vector-icons/Ionicons";
import { Actions } from "react-native-router-flux";
import Icon2 from "react-native-vector-icons/FontAwesome";

export default class CheckoutMerchFNB extends Component {
  constructor(props) {
    super(props);
    this.state = { delivery: true };
  }

  componentDidMount() {
    console.log("checkout for ", this.props.item);
  }

  onButtonPress = () => {
    var show = this.state.delivery;
    show = !show;
    this.setState({
      delivery: show
    });
  };

  renderButton() {
    return (
      <View style={{ width: "100%", alignItems: "center", marginBottom: 10 }}>
        {this.state.delivery === true ? (
          <View style={{ flexDirection: "row" }}>
            <Button
              small
              style={[UtilStyles.btnYellow, { margin: 5 }]}
              onPress={() => this.onButtonPress()}
            >
              <Text style={UtilStyles.btnTextBlack}>Delivery</Text>
            </Button>
            <Button
              small
              style={[UtilStyles.btnTransparent, { margin: 5 }]}
              onPress={() => this.onButtonPress()}
            >
              <Text style={UtilStyles.btnTextGrey}>Self Pickeup</Text>
            </Button>
          </View>
        ) : (
          <View style={{ flexDirection: "row" }}>
            <Button
              small
              style={[UtilStyles.btnTransparent, { margin: 5 }]}
              onPress={() => this.onButtonPress()}
            >
              <Text style={UtilStyles.btnTextGrey}>Delivery</Text>
            </Button>
            <Button
              small
              style={[UtilStyles.btnYellow, { margin: 5 }]}
              onPress={() => this.onButtonPress()}
            >
              <Text style={UtilStyles.btnTextBlack}>Self Pickeup</Text>
            </Button>
          </View>
        )}
      </View>
    );
  }

  renderlistShop = () => {
    console.log("title ", this.props.items.title);
    return (
      <View>
        <FlatList
          data={this.props.items}
          keyExtractor={(object, index) => index}
          renderItem={({ item }) => (
            <ListItem
              style={{
                backgroundColor: "transparent",
                marginLeft: 0,
                marginBottom: 10
              }}
              // onPress={() => Actions.Payment()}
            >
              <Left style={{ flex: 1 }}>
                <View
                  style={{
                    backgroundColor: "white",
                    alignSelf: "flex-start",
                    padding: 10,
                    marginRight: 10
                  }}
                >
                  <Image
                    style={{
                      width: 60,
                      resizeMode: "stretch",
                      height: 80
                    }}
                    source={item.image}
                  />
                </View>
              </Left>
              <Body style={{ flex: 2, borderBottomWidth: 0 }}>
                <Text style={[UtilStyles.standardText, { fontWeight: "bold" }]}>
                  {item.title}
                </Text>
                <Text style={UtilStyles.standardText}>Black</Text>
                <View style={{ flexDirection: "row" }}>
                  <Left>
                    <Text
                      style={[
                        UtilStyles.titleText,
                        { fontWeight: "bold", color: "grey" }
                      ]}
                    >
                      {item.price}
                    </Text>
                  </Left>
                  <Right>
                    <View style={{ flexDirection: "row", marginTop: 20 }}>
                      <Left style={{ flex: 1, alignItems: "center" }}>
                        <View style={UtilStyles.circleGreyOnButton}>
                          <Icon2
                            size={15}
                            style={{
                              color: Color.material_grey_600
                            }}
                            name="minus"
                          />
                        </View>
                      </Left>
                      <Body style={{ flex: 1, alignItems: "center" }}>
                        <Text style={UtilStyles.buttonTextBlack}>
                          {item.quantity}
                        </Text>
                      </Body>
                      <Right style={{ flex: 1, alignItems: "center" }}>
                        <View style={UtilStyles.circleGreyOnButton}>
                          <Icon2
                            size={15}
                            style={{
                              color: Color.material_grey_600
                            }}
                            name="plus"
                          />
                        </View>
                      </Right>
                    </View>
                  </Right>
                </View>
              </Body>
            </ListItem>
          )}
        />
      </View>
    );
  };

  render() {
    return (
      <View style={[UtilStyles.containerJustifyCenter]}>
        <CheckoutHeader rkCardImgOverlay />

        <ScrollView
          automaticallyAdjustContentInsets={true}
          style={[UtilStyles.container, { margin: 20 }]}
          showsVerticalScrollIndicator={false}
        >
          {this.renderButton()}

          {this.state.delivery === true ? (
            <View style={{ marginVertical: 10 }}>
              <Text style={[UtilStyles.standardText, { fontWeight: "bold" }]}>
                Shipping Address
              </Text>
              <ListItem
                style={{
                  backgroundColor: "transparent",
                  marginLeft: 0,
                  marginBottom: 10,
                  paddingBottom: 10
                }}
                onPress={() => Actions.Address()}
              >
                <Body style={{ flex: 2, marginBottom: 10 }}>
                  <Text
                    style={[UtilStyles.standardText, { fontWeight: "bold" }]}
                  >
                    John Doe
                  </Text>
                  <Text style={UtilStyles.standardText}>
                    No 123, Sub Street,
                  </Text>
                  <Text style={UtilStyles.standardText}>Main Street,</Text>
                  <Text style={UtilStyles.standardText}>
                    53100, Kuala Lumpur
                  </Text>
                  <Text style={UtilStyles.standardText}>
                    Wilayah Persekutuan Kuala Lumpur
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
          ) : (
            <View />
          )}

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

            {this.renderlistShop()}
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
              RM 90.00
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
