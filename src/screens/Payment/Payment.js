import React, { Component } from "react";
import { Text, View, ScrollView, Image } from "react-native";
import { UtilStyles } from "../../style/styles";
import Color from "../../config/colors.json";
import { Body, ListItem, Left, Right } from "native-base";
import { Actions } from "react-native-router-flux";
import { Button } from "native-base";
import QRCodeHeader from "../MyPurchases/QRCodeHeader";
import Icon from "react-native-vector-icons/Entypo";

export default class Payment extends Component {
  onPayButtonPress = paymentMethod => {
    console.log("payment method choose: ", paymentMethod);
    Actions.MyTicket();
  };

  render() {
    return (
      <View style={UtilStyles.containerJustifyCenter}>
        <QRCodeHeader title="Payment Method" />

        <ScrollView
          automaticallyAdjustContentInsets={true}
          style={[UtilStyles.container, { margin: 20 }]}
          showsVerticalScrollIndicator={false}
        >
          <ListItem
            style={{ borderBottomWidth: 0, marginLeft: 0 }}
            onPress={() => Actions.pop()}
          >
            <Left>
              <Image
                style={{ width: 80, height: 50 }}
                source={require("../../images/ewallet.png")}
              />
            </Left>
            <Body style={{ left: "-50%", borderBottomWidth: 0 }}>
              <Text style={{ fontSize: 12 }}>E - Wallet Payment</Text>
            </Body>
          </ListItem>
          <ListItem
            style={{ borderBottomWidth: 0, marginLeft: 0 }}
            onPress={() => Actions.pop()}
          >
            <Left>
              <Image
                style={{ width: 80, height: 50 }}
                source={require("../../images/711.png")}
              />
            </Left>
            <Body style={{ left: "-50%", borderBottomWidth: 0 }}>
              <Text style={{ fontSize: 12 }}>MOLPay Cash 7Eleven</Text>
            </Body>
          </ListItem>
          <ListItem
            style={{ borderBottomWidth: 0, marginLeft: 0 }}
            onPress={() => Actions.pop()}
          >
            <Left>
              <Image
                style={{ width: 80, height: 50 }}
                source={require("../../images/creditcard.png")}
              />
            </Left>
            <Body style={{ left: "-50%", borderBottomWidth: 0 }}>
              <Text style={{ fontSize: 12 }}>Debit / Credit Card</Text>
            </Body>
          </ListItem>

          <ListItem
            style={{ borderBottomWidth: 0, marginLeft: 0 }}
            onPress={() => Actions.pop()}
          >
            <Left>
              <Image
                style={{ width: 80, height: 50 }}
                source={require("../../images/fpx.png")}
              />
            </Left>
            <Body style={{ left: "-50%", borderBottomWidth: 0 }}>
              <Text style={{ fontSize: 12 }}>FPX Online</Text>
            </Body>
          </ListItem>
        </ScrollView>
        {/* {this._overlay()} */}
      </View>
    );
  }
}
