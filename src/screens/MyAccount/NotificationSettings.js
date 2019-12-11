import React, { Component } from "react";
import {
  Container,
  Content,
  Left,
  Right,
  Text,
  Footer,
  Card,
  Button,
  Body,
  List,
  ListItem
} from "native-base";
import {
  View,
  Image,
  FlatList,
  TouchableWithoutFeedback,
  Switch,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { Actions } from "react-native-router-flux";
import IconBadge from "react-native-icon-badge";
import Color from "../../config/colors.json";
import { UtilStyles } from "../../style/styles";
import ModalHeader from "../Cart/ModalHeader";

class NotificationSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchAllow: false,
      switchEvent: false,
      switchPromo: false
    };
  }

  toggleSwitchAllow = value => {
    this.setState({ switchAllow: value });
    console.log("Switch 1 is: " + value);
  };

  toggleSwitchEvent = value => {
    this.setState({ switchEvent: value });
    console.log("Switch 1 is: " + value);
  };

  toggleSwitchPromo = value => {
    this.setState({ switchPromo: value });
    console.log("Switch 1 is: " + value);
  };

  componentWillMount() {
    this.setState({});
  }

  render() {
    return (
      <View style={UtilStyles.containerJustifyCenter}>
        <ModalHeader
          modal_title="Notification Settings"
          toggleModal={this.props.toggleModal}
        />

        <ScrollView
          automaticallyAdjustContentInsets={true}
          style={[UtilStyles.container, { padding: 20 }]}
          showsVerticalScrollIndicator={false}
        >
          <ListItem
            style={{
              backgroundColor: "white",
              height: 50,
              marginLeft: 0,
              marginBottom: 10
            }}
          >
            <Body style={{ borderBottomWidth: 0 }}>
              <Text
                style={{
                  fontFamily: "Lato-Regular",
                  fontSize: 12
                }}
              >
                Allow Notification
              </Text>

              {/* <Text
                style={{
                  fontFamily: "Lato-Regular",
                  fontSize: 11,
                  color: "grey"
                }}
              >
                No parking selected
              </Text> */}
            </Body>
            <Right>
              <Switch
                onValueChange={this.toggleSwitchAllow}
                value={this.state.switchAllow}
                style={{
                  transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }],
                  margin: 0
                }}
              />
            </Right>
          </ListItem>

          <ListItem
            style={{
              backgroundColor: "white",
              height: 80,
              marginLeft: 0,
              marginBottom: 10
            }}
          >
            <Body style={{ borderBottomWidth: 0 }}>
              <Text
                style={{
                  fontFamily: "Lato-Regular",
                  fontSize: 12
                }}
              >
                New Event
              </Text>

              <Text
                style={{
                  fontFamily: "Lato-Regular",
                  fontSize: 11,
                  color: "grey",
                  marginTop: 5
                }}
              >
                This will allow you to get notification about our new event.
              </Text>
            </Body>
            <Right>
              <Switch
                onValueChange={this.toggleSwitchEvent}
                value={this.state.switchEvent}
                style={{
                  transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }],
                  margin: 0
                }}
              />
            </Right>
          </ListItem>

          <ListItem
            style={{
              backgroundColor: "white",
              height: 80,
              marginLeft: 0,
              marginBottom: 10
            }}
          >
            <Body style={{ borderBottomWidth: 0 }}>
              <Text
                style={{
                  fontFamily: "Lato-Regular",
                  fontSize: 12
                }}
              >
                New Promotion
              </Text>

              <Text
                style={{
                  fontFamily: "Lato-Regular",
                  fontSize: 11,
                  color: "grey",
                  marginTop: 5
                }}
              >
                This will allow you to get notification about any promotion
                given.
              </Text>
            </Body>
            <Right>
              <Switch
                onValueChange={this.toggleSwitchPromo}
                value={this.state.switchPromo}
                style={{
                  transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }],
                  margin: 0
                }}
              />
            </Right>
          </ListItem>
        </ScrollView>
      </View>
    );
  }
}

export default NotificationSettings;
