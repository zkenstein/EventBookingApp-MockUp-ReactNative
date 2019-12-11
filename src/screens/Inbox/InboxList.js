import React, { Component } from "react";
import { Right, Text, Body, ListItem, Left } from "native-base";
import {
  View,
  Image,
  FlatList,
  TouchableWithoutFeedback,
  Switch,
  ScrollView
} from "react-native";

import { Actions } from "react-native-router-flux";
import IconBadge from "react-native-icon-badge";
import Color from "../../config/colors.json";
import { UtilStyles } from "../../style/styles";
import ModalHeader from "../Cart/ModalHeader";
import TicketListHeader from "../Tickets/TicketListHeader";

export default class InboxList extends Component {
  render() {
    return (
      <View style={UtilStyles.containerJustifyCenter}>
        <TicketListHeader header_text="Inbox" />

        <ScrollView
          automaticallyAdjustContentInsets={true}
          style={[UtilStyles.container, { paddingHorizontal: 20 }]}
          showsVerticalScrollIndicator={false}
        >
          <ListItem
            style={{
              backgroundColor: "white",
              marginLeft: 0
            }}
          >
            <View>
              <Image
                style={{
                  width: 20,
                  height: 20,
                  margin: 10,
                  resizeMode: "stretch"
                }}
                source={require("../../images/Icon/msgyellow.png")}
              />
              <View
                style={{
                  backgroundColor: "red",
                  width: 8,
                  height: 8,
                  borderRadius: 8,
                  marginLeft: 25,
                  marginTop: 10,
                  position: "absolute"
                }}
              />
            </View>

            <Body style={{ borderBottomWidth: 0 }}>
              <Text
                style={{
                  fontFamily: "Lato-Regular",
                  fontSize: 12
                }}
              >
                Message Title
              </Text>

              <Text
                style={{
                  fontFamily: "Lato-Regular",
                  fontSize: 11,
                  color: "grey",
                  marginTop: 5
                }}
              >
                Message Description
              </Text>
            </Body>
          </ListItem>

          <ListItem
            style={{
              backgroundColor: "white",
              marginLeft: 0
            }}
          >
            <Image
              style={{
                width: 20,
                height: 20,
                margin: 10,
                resizeMode: "stretch"
              }}
              source={require("../../images/Icon/msgyellow.png")}
            />
            <Body style={{ borderBottomWidth: 0 }}>
              <Text
                style={{
                  fontFamily: "Lato-Regular",
                  fontSize: 12
                }}
              >
                Message Title
              </Text>

              <Text
                style={{
                  fontFamily: "Lato-Regular",
                  fontSize: 11,
                  color: "grey",
                  marginTop: 5
                }}
              >
                Message Description
              </Text>
            </Body>
          </ListItem>

          <ListItem
            style={{
              backgroundColor: "white",
              marginLeft: 0
            }}
          >
            <Image
              style={{
                width: 20,
                height: 20,
                margin: 10,
                resizeMode: "stretch"
              }}
              source={require("../../images/Icon/msgyellow.png")}
            />
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
                This is about our new event.
              </Text>
            </Body>
          </ListItem>

          <ListItem
            style={{
              backgroundColor: "white",
              marginLeft: 0
            }}
          >
            <Image
              style={{
                width: 20,
                height: 20,
                margin: 10,
                resizeMode: "stretch"
              }}
              source={require("../../images/Icon/msgyellow.png")}
            />
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
                This is about any promotion given.
              </Text>
            </Body>
          </ListItem>
        </ScrollView>
      </View>
    );
  }
}
