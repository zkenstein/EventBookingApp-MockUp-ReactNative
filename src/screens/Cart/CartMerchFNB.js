import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableWithoutFeedback,
  Image
} from "react-native";
import { UtilStyles } from "../../style/styles";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/FontAwesome";
import Color from "../../config/colors.json";
import { Actions } from "react-native-router-flux";
import { List, Footer, Body, Right, Left, Button } from "native-base";
import QRCodeHeader from "../MyPurchases/QRCodeHeader";
var dataCart = [];
export default class CartMerchFNB extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log("cart for ", this.props.item);
  }
  renderlistShop = () => {
    if (this.props.item === "fnb") {
      var temp = [
        {
          image: require("../../images/expImg/meal1.jpg"),
          title: "Set 1",
          price: "RM24.00",
          desc: "Burger",
          quantity: 1
        },
        {
          image: require("../../images/expImg/meal2.jpg"),
          title: "Set 2",
          price: "RM24.00",
          desc: "Hotdog",
          quantity: 1
        },
        {
          image: require("../../images/expImg/meal3.jpg"),
          title: "Set 3",
          price: "RM24.00",
          desc: "Chicken",
          quantity: 1
        }
      ];
    }
    if (this.props.item === "merch") {
      var temp = [
        {
          image: require("../../images/expImg/jersey1.jpg"),
          title: "Jersey Malaysia",
          price: "RM90.00",
          desc: "Black",
          quantity: 1
        },
        {
          image: require("../../images/expImg/jersey2.jpg"),
          title: "Jersey Malaysia",
          price: "RM90.00",
          desc: "Black, Yellow",
          quantity: 1
        },
        {
          image: require("../../images/expImg/jersey3.jpg"),
          title: "Jersey Malaysia",
          price: "RM90.00",
          desc: "White",
          quantity: 1
        }
      ];
    }
    dataCart = temp;
    return (
      <View>
        <FlatList
          data={temp}
          keyExtractor={(object, index) => index}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback onPress={() => this.onButtonPress(item)}>
              <View style={{ flexDirection: "row", marginTop: 10 }}>
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
                      width: 100,
                      resizeMode: "stretch",
                      height: 120
                    }}
                    source={item.image}
                  />
                </View>

                <View
                  style={{
                    padding: 10,
                    justifyContent: "center",
                    flex: 1
                  }}
                >
                  <Text
                    style={[UtilStyles.standardText, { fontWeight: "bold" }]}
                  >
                    {item.title}
                  </Text>
                  <Text style={UtilStyles.standardText}>{item.desc}</Text>
                  <Text
                    style={[
                      UtilStyles.standardText,
                      {
                        fontWeight: "bold",
                        marginTop: 20,
                        color: "grey"
                      }
                    ]}
                  >
                    {item.price}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 20
                    }}
                  >
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
                    <View style={{ flex: 2 }} />
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          )}
        />
      </View>
    );
  };
  render() {
    return (
      <View style={[UtilStyles.containerJustifyCenter]}>
        <QRCodeHeader title="Cart" />
        <ScrollView
          automaticallyAdjustContentInsets={true}
          style={{
            padding: 20
          }}
        >
          <List>{this.renderlistShop()}</List>
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
              RM 270.65
            </Text>
            <Text style={UtilStyles.standardText}>Free Domestic Shipping</Text>
          </View>
          <View style={{ flex: 1, paddingLeft: 5, paddingBottom: 10 }}>
            <Button
              style={UtilStyles.buttonFillWidthYellow}
              onPress={() => Actions.CheckoutMerchFNB({ items: dataCart })}
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
