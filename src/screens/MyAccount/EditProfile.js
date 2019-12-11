import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableHighlight
} from "react-native";
import { Button, Left, Right, Body, Input, Picker } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import { UtilStyles } from "../../style/styles";
import Color from "../../config/colors.json";
import Icon2 from "react-native-vector-icons/Ionicons";
import Icon3 from "react-native-vector-icons/MaterialIcons";
import Icon4 from "react-native-vector-icons/AntDesign";
import { Actions } from "react-native-router-flux";
import Overlay from "react-native-modal-overlay";
import EditProfileHeader from "./EditProfileHeader";

export default class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      selectedGender: "",
      gender: ["Male", "Female"],
      dob: "",
      emName: "",
      emPhone: "",
      selectedRelation: "",
      emRelation: [
        "Mother",
        "Father",
        "Brother",
        "Sister",
        "Guardian",
        "Close Family",
        "Friends"
      ]
    };
  }
  onValueChangeGender(value) {
    this.setState({
      selectedGender: value
    });
  }
  onValueChangeRelation(value) {
    this.setState({
      selectedRelation: value
    });
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  };
  render() {
    return (
      <View style={UtilStyles.containerJustifyCenter}>
        <EditProfileHeader rkCardImgOverlay />
        <ScrollView
          automaticallyAdjustContentInsets={true}
          style={[UtilStyles.container, { padding: 20 }]}
          showsVerticalScrollIndicator={false}
        >
          <Text style={[UtilStyles.titleText, { fontWeight: "bold" }]}>
            Personal Details
          </Text>

          <View style={UtilStyles.viewOuterListEditProfile}>
            <Text
              style={[
                UtilStyles.standardText,
                { fontWeight: "bold", marginLeft: 20, marginTop: 10 }
              ]}
            >
              Name
            </Text>
            <Input
              style={UtilStyles.formInputStandard}
              placeholder="Name"
              onChangeText={val => this.onChangeText("name", val)}
              value={this.state.name}
            />
            <Text
              style={[
                UtilStyles.standardText,
                { fontWeight: "bold", marginLeft: 20, marginTop: 10 }
              ]}
            >
              Email
            </Text>
            <Input
              style={UtilStyles.formInputStandard}
              placeholder="Email"
              onChangeText={val => this.onChangeText("email", val)}
              value={this.state.email}
            />
            <Text
              style={[
                UtilStyles.standardText,
                { fontWeight: "bold", marginLeft: 20, marginTop: 10 }
              ]}
            >
              Phone
            </Text>
            <Input
              style={UtilStyles.formInputStandard}
              placeholder="Phone"
              onChangeText={val => this.onChangeText("phone", val)}
              value={this.state.phone}
            />
            <Text
              style={[
                UtilStyles.standardText,
                { fontWeight: "bold", marginLeft: 20, marginTop: 10 }
              ]}
            >
              Gender
            </Text>
            <View style={UtilStyles.formInputStandard}>
              <Picker
                style={{
                  width: "100%",
                  height: 40,
                  alignItems: "center"
                }}
                textStyle={UtilStyles.standardText}
                placeholder="Gender"
                placeholderStyle={{ color: "grey" }}
                placeholderIconColor="black"
                mode="dropdown"
                iosIcon={
                  <Icon2
                    name="ios-arrow-down"
                    size={20}
                    style={{ marginLeft: -70 }}
                  />
                }
                headerStyle={{ backgroundColor: Color.yellow_psm }}
                headerBackButtonTextStyle={{ color: "black" }}
                headerTitleStyle={{ color: "black" }}
                selectedValue={this.state.selectedGender}
                onValueChange={this.onValueChangeGender.bind(this)}
              >
                {this.state.gender.map((item, index) => {
                  return <Picker.Item key={index} label={item} value={item} />;
                })}
              </Picker>
            </View>
            <Text
              style={[
                UtilStyles.standardText,
                { fontWeight: "bold", marginLeft: 20, marginTop: 10 }
              ]}
            >
              Date of Birth
            </Text>
            <Input
              style={UtilStyles.formInputStandard}
              placeholder="Date of Birth"
              onChangeText={val => this.onChangeText("dob", val)}
              value={this.state.dob}
            />
          </View>

          <Text
            style={[
              UtilStyles.titleText,
              { fontWeight: "bold", marginTop: 20 }
            ]}
          >
            Emergency Contacts
          </Text>
          <View
            style={[UtilStyles.viewOuterListEditProfile, { marginBottom: 20 }]}
          >
            <Text
              style={[
                UtilStyles.standardText,
                { fontWeight: "bold", marginLeft: 20, marginTop: 10 }
              ]}
            >
              Name
            </Text>
            <Input
              style={UtilStyles.formInputStandard}
              placeholder="Name"
              onChangeText={val => this.onChangeText("emName", val)}
              value={this.state.emName}
            />
            <Text
              style={[
                UtilStyles.standardText,
                { fontWeight: "bold", marginLeft: 20, marginTop: 10 }
              ]}
            >
              Phone
            </Text>
            <Input
              style={UtilStyles.formInputStandard}
              placeholder="Phone"
              onChangeText={val => this.onChangeText("emPhone", val)}
              value={this.state.emPhone}
            />
            <Text
              style={[
                UtilStyles.standardText,
                { fontWeight: "bold", marginLeft: 20, marginTop: 10 }
              ]}
            >
              Relationship
            </Text>
            <View style={UtilStyles.formInputStandard}>
              <Picker
                style={{
                  width: "100%",
                  height: 40,
                  alignItems: "center"
                }}
                textStyle={UtilStyles.standardText}
                placeholder="Relationship"
                placeholderStyle={{ color: "grey" }}
                placeholderIconColor="black"
                mode="dropdown"
                iosIcon={
                  <Icon2
                    name="ios-arrow-down"
                    size={20}
                    style={{ marginLeft: -70 }}
                  />
                }
                headerStyle={{ backgroundColor: Color.yellow_psm }}
                headerBackButtonTextStyle={{ color: "black" }}
                headerTitleStyle={{ color: "black" }}
                selectedValue={this.state.selectedRelation}
                onValueChange={this.onValueChangeRelation.bind(this)}
              >
                {this.state.emRelation.map((item, index) => {
                  return <Picker.Item key={index} label={item} value={item} />;
                })}
              </Picker>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            justifyContent: "center",
            margin: 20,
            alignItems: "center"
          }}
        >
          <Button
            style={UtilStyles.buttonFillWidthYellow}
            onPress={() => Actions.pop()}
          >
            <Left style={{ flex: 1 }} />
            <Body style={{ flex: 3, alignItems: "center" }}>
              <Text style={UtilStyles.buttonTextBlack}>Update Profile</Text>
            </Body>
            <Right style={{ flex: 1, alignItems: "center" }}>
              <View style={UtilStyles.circleWhiteOnButton}>
                <Icon3
                  size={20}
                  style={{
                    color: "black"
                  }}
                  name="file-upload"
                />
              </View>
            </Right>
          </Button>
        </View>
      </View>
    );
  }
}
