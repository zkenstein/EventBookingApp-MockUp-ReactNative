import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  StatusBar
} from "react-native";
import QRCodeHeader from "../MyPurchases/QRCodeHeader";
import { UtilStyles } from "../../style/styles";
import Color from "../../config/colors.json";
import { Left, Right, Content, Input, Button, Body } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import { Actions } from "react-native-router-flux";
import PhoneInput from "react-native-phone-input";
import CountryPicker from "react-native-country-picker-modal";

import firebase from "react-native-firebase";
let Analytics = firebase.analytics();

// firebase
//   .auth()
//   .signInAnonymously()
//   .then(credential => {
//     if (credential) {
//       console.log("default app user ->", credential.user.toJSON());
//     }
//   });

export default class InputPhoneNo extends Component {
  constructor() {
    super();
    this.state = {
      id: null,
      validUserData: {},
      cca2: "MY",
      callingCode: "60",
      phoneNumber: null,
      isLoading: true,
      code: "60"
    };
    this.onPressFlag = this.onPressFlag.bind(this);
    this.selectCountry = this.selectCountry.bind(this);

    Analytics.setAnalyticsCollectionEnabled(true);
    Analytics.setUserId("001");
    // Analytics.setUserProperty(<propKey1>, <propValue1>)
    Analytics.setUserProperty("userType", "developer");
    Analytics.setCurrentScreen("login_screen", "InputPhoneNo");
    Analytics.logEvent("app_open", {
      screen: "scns"
    });
  }

  onPhoneNumber(text) {
    this.setState({
      phoneNumber: text
    });
  }

  onPressFlag() {
    this.countryPicker.openModal();
  }

  selectCountry(country) {
    console.log(country);
    this.phone.selectCountry(country.cca2.toLowerCase());
    this.setState({ cca2: country.cca2, callingCode: country.callingCode });
    this.setState({ code: country.callingCode });
  }

  render() {
    return (
      <View style={UtilStyles.container}>
        <StatusBar backgroundColor={"transparent"} translucent />
        <Image
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "cover",
            position: "absolute",
            alignSelf: "center"
          }}
          source={require("../../images/back.jpg")}
        />
        <View style={{ margin: 20, marginTop: "40%" }}>
          <Image
            style={{
              width: 80,
              height: 100
            }}
            source={require("../../images/klscLogo3.png")}
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
            Enter your mobile number to continue.
          </Text>
          <View style={{ flexDirection: "row", marginTop: 30 }}>
            <View
              style={[
                UtilStyles.formInputLine,
                {
                  flex: 0.5,
                  paddingLeft: 0
                }
              ]}
            >
              <PhoneInput
                initialCountry="my"
                ref={ref => {
                  this.phone = ref;
                }}
                style={{ margin: 10, fontSize: 12 }}
                onPressFlag={this.onPressFlag}
              />
              <CountryPicker
                filterable={true}
                closeable={true}
                autoFocusFilter={false}
                ref={ref => {
                  this.countryPicker = ref;
                }}
                onChange={value => this.selectCountry(value)}
                translation="eng"
                cca2={this.state.cca2}
              >
                <View />
              </CountryPicker>
            </View>
            <Input
              style={UtilStyles.formInputLine}
              placeholder="Exp: 123456789"
              keyboardType="numeric"
              onChangeText={this.onPhoneNumber.bind(this)}
              value={this.state.phoneNumber}
            />
          </View>
          <View style={{ height: 30 }} />

          <Button
            style={UtilStyles.buttonFillWidthBlack}
            onPress={() => Actions.VerifyPhoneNo()}
            // onPress={() =>
            //   this.onButtonMobilePress(
            //     this.state.phoneNumber,
            //     this.state.callingCode
            //   )
            // }
          >
            <Left style={{ flex: 1 }} />
            <Body style={{ flex: 3, alignItems: "center" }}>
              <Text style={UtilStyles.buttonTextYellow}>Next</Text>
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
      </View>
    );
  }
}
