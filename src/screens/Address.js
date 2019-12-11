import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import {
  Button,
  ListItem,
  Left,
  Right,
  Body,
  Footer,
  Input,
  Picker
} from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import { UtilStyles } from "../style/styles";
import Color from "../config/colors.json";
import { Actions } from "react-native-router-flux";
import QRCodeHeader from "./MyPurchases/QRCodeHeader";
import SuperTextInput from "../components/SuperTextInput";
import axios from "axios";

export default class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newAdd: true,
      address1: "",
      address2: "",
      poscode: "",
      city: "",
      selectedState: "",
      lisOfState: []
    };
  }

  componentDidMount() {
    this.getListOfState();
  }

  onButtonPress = () => {
    var show = this.state.newAdd;
    show = !show;
    this.setState({
      newAdd: show
    });
  };

  renderButton() {
    return (
      <View style={{ width: "100%", alignItems: "center", marginBottom: 10 }}>
        {this.state.newAdd === true ? (
          <View style={{ flexDirection: "row" }}>
            <Button
              small
              style={[UtilStyles.btnYellow, { margin: 5 }]}
              onPress={() => this.onButtonPress()}
            >
              <Text style={UtilStyles.btnTextBlack}>New Address</Text>
            </Button>
            <Button
              small
              style={[UtilStyles.btnTransparent, { margin: 5 }]}
              onPress={() => this.onButtonPress()}
            >
              <Text style={UtilStyles.btnTextGrey}>Recent Address</Text>
            </Button>
          </View>
        ) : (
          <View style={{ flexDirection: "row" }}>
            <Button
              small
              style={[UtilStyles.btnTransparent, { margin: 5 }]}
              onPress={() => this.onButtonPress()}
            >
              <Text style={UtilStyles.btnTextGrey}>New Address</Text>
            </Button>
            <Button
              small
              style={[UtilStyles.btnYellow, { margin: 5 }]}
              onPress={() => this.onButtonPress()}
            >
              <Text style={UtilStyles.btnTextBlack}>Recent Address</Text>
            </Button>
          </View>
        )}
      </View>
    );
  }

  getListOfState = () => {
    let env = this;
    axios.get("https://stubapp.com/api/" + "state").then(results => {
      var stateData = results.data;

      env.setState({
        lisOfState: stateData
      });
    });
  };

  onValueChangeState(value) {
    this.setState({
      selectedState: value
    });
  }

  getDistrict = () => {
    console.log("finish");
    let env = this;
    axios
      .get(
        "https://stubapp.com/api/" + "postcode?postcode=" + env.state.poscode
      )
      .then(results => {
        if (results.data.length > 0) {
          env.setState({
            city: results.data[0]["post_office"]
          });
        } else {
          console.log("Postcode does not exists");
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  };

  renderAddressForm() {
    return (
      <View>
        <Input
          style={UtilStyles.formInputStandard}
          placeholder="First Lane"
          onChangeText={val => this.onChangeText("address1", val)}
          value={this.state.address1}
        />

        <Input
          style={UtilStyles.formInputStandard}
          placeholder="Second Lane"
          onChangeText={val => this.onChangeText("address2", val)}
          value={this.state.address2}
        />

        <View style={{ flexDirection: "row" }}>
          <SuperTextInput
            style={UtilStyles.formInputStandard}
            onPauseText={() => this.getDistrict()}
            keyboardType="numeric"
            onChangeText={val => this.onChangeText("poscode", val)}
            value={this.state.poscode}
            placeholder="Poscode"
          />

          <Input
            style={UtilStyles.formInputStandard}
            disabled
            value={this.state.city}
            placeholder="City"
          />
        </View>

        {/* <View style={UtilStyles.formPicker}> */}
        <View style={UtilStyles.formInputStandard}>
          <Picker
            style={{
              width: "100%",
              alignItems: "center"
            }}
            textStyle={UtilStyles.standardText}
            placeholder="State"
            placeholderStyle={{ color: "grey" }}
            placeholderIconColor="black"
            mode="dropdown"
            iosIcon={
              <Icon
                name="ios-arrow-down"
                size={20}
                style={{ marginLeft: -70 }}
              />
            }
            headerStyle={{ backgroundColor: Color.yellow_psm }}
            headerBackButtonTextStyle={{ color: "black" }}
            headerTitleStyle={{ color: "black" }}
            selectedValue={this.state.selectedState}
            onValueChange={this.onValueChangeState.bind(this)}
          >
            {this.state.lisOfState.map((item, index) => {
              return (
                <Picker.Item
                  key={index}
                  label={item.state_name}
                  value={item.state_name}
                />
              );
            })}
          </Picker>
        </View>
      </View>
    );
  }

  renderRecentAddress() {
    return (
      <View style={{ marginTop: 10, marginHorizontal: 10 }}>
        <Button
          style={[
            {
              backgroundColor: "white",
              borderColor: "grey",
              borderWidth: 0.5,
              flexDirection: "column",
              width: "100%",
              height: 120,
              justifyContent: "center",
              alignItems: "flex-start",
              paddingHorizontal: 20,
              borderRadius: 10
            }
          ]}
          // onPress={() => this.selectExistingAddress(item)}
        >
          <Text style={UtilStyles.standardText}>No 123, Sub Street,</Text>
          <Text style={UtilStyles.standardText}>Main Street,</Text>
          <Text style={UtilStyles.standardText}>53100, Kuala Lumpur</Text>
          <Text style={UtilStyles.standardText}>
            Wilayah Persekutuan Kuala Lumpur
          </Text>
        </Button>
      </View>
    );
  }

  render() {
    return (
      <View style={UtilStyles.containerJustifyCenter}>
        <QRCodeHeader title="Address" />

        <ScrollView
          automaticallyAdjustContentInsets={true}
          style={[UtilStyles.container, { margin: 20 }]}
          showsVerticalScrollIndicator={false}
        >
          {this.renderButton()}

          {this.state.newAdd === true ? (
            <View style={{ marginVertical: 10 }}>
              {this.renderAddressForm()}
            </View>
          ) : (
            <View>{this.renderRecentAddress()}</View>
          )}
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
          <View style={{ flex: 1, paddingBottom: 10 }}>
            <Button
              style={UtilStyles.buttonFillWidthYellow}
              onPress={() => Actions.Payment()}
            >
              <Left style={{ flex: 0.5 }} />
              <Body style={{ flex: 2, alignItems: "center" }}>
                <Text style={UtilStyles.buttonTextBlack}>Confirm</Text>
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
