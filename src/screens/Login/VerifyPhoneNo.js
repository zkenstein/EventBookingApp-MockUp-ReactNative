import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableWithoutFeedback
} from "react-native";
import QRCodeHeader from "../MyPurchases/QRCodeHeader";
import { UtilStyles } from "../../style/styles";
import Color from "../../config/colors.json";
import { Left, Right, Content, Input, Button, Body } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import { Actions } from "react-native-router-flux";

export default class VerifyPhoneNo extends Component {
  constructor() {
    super();
    this.state = {
      phone: "",
      loading: false,
      error: "",
      timer: 60,
      firstNo: "",
      value: "",
      response: {},
      responseCode: 0
    };
  }

  onFirstNo(text) {
    this.setState({
      firstNo: text
    });
  }
  render() {
    return (
      <View style={UtilStyles.container}>
        <View style={{ margin: 20, marginTop: 50 }}>
          <Image
            style={{
              width: 80,
              height: 100
            }}
            source={require("../../images/klscLogo2.png")}
          />
          <Text
            style={[
              UtilStyles.titleText,
              {
                fontWeight: "bold",
                fontSize: 20,
                marginTop: 20
              }
            ]}
          >
            Welcome!
          </Text>

          <Text style={[UtilStyles.titleText, { fontWeight: "100" }]}>
            Enter your SMS verification code.
          </Text>
          <View style={{ flexDirection: "row", marginTop: 30 }}>
            <Input
              style={UtilStyles.formInputNum}
              maxLength={4}
              keyboardType="numeric"
              onChangeText={this.onFirstNo.bind(this)}
            />
          </View>
          <View style={{ height: 30 }} />

          <View style={{ flexDirection: "row" }}>
            <Button
              style={{
                backgroundColor: "transparent",
                flex: 1,
                justifyContent: "center",
                borderWidth: 0,
                elevation: 0
              }}
            >
              <Text style={UtilStyles.buttonTextBlack}>Resend Code</Text>
            </Button>
            <Button
              style={[UtilStyles.buttonFillWidthYellow, { flex: 1 }]}
              onPress={() => Actions.Home()}
              // onPress={() =>
              //   this.onButtonMobilePress(
              //     this.state.phoneNumber,
              //     this.state.callingCode
              //   )
              // }
            >
              <Left style={{ flex: 1 }} />
              <Body style={{ flex: 3, alignItems: "center" }}>
                <Text style={UtilStyles.buttonTextBlack}>Verify</Text>
              </Body>
              <Right style={{ flex: 1.5, alignItems: "center" }}>
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
        </View>
      </View>
    );
  }
}
