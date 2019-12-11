import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Left,
  Body,
  Right
} from "native-base";
import { StatusBar } from "react-native";
import { Actions } from "react-native-router-flux";
import Icon from "react-native-vector-icons/Ionicons";
import Color from "../../config/colors.json";
import { UtilStyles } from "../../style/styles";
export default class TimeSlot extends Component {
  render() {
    var slots = [
      {
        slots: "09:00 am - 10.00 am",
        availability: 0
      },
      {
        slots: "10:00 am - 11.00 am",
        availability: 0
      },
      {
        slots: "11:00 am - 12.00 pm",
        availability: 0
      },
      {
        slots: "02:00 am - 03.00 pm",
        availability: 0
      },
      {
        slots: "03:00 pm - 04.00 pm",
        availability: 0
      }
    ];
    return (
      <Container>
        <Header
          style={[
            UtilStyles.headerTitleOnly,
            { borderBottomWidth: 0, elevation: 0 }
          ]}
        >
          <StatusBar
            backgroundColor={Color.yellow_psm}
            barStyle="dark-content"
          />
          <Container
            style={{
              flexDirection: "row",
              marginTop: -30,
              marginBottom: -50,
              backgroundColor: "transparent"
            }}
          >
            <Left style={{ flex: 1 }}>
              <Icon
                size={25}
                style={{
                  width: 30,
                  height: 30,
                  margin: 6,
                  color: "black",
                  marginTop: 10,
                  marginLeft: 20
                }}
                name="ios-arrow-back"
                onPress={() => this.props.closeModal(false)}
              />
            </Left>
            <Body style={{ flex: 2 }}>
              <Text style={[UtilStyles.titleText, { textAlign: "center" }]}>
                Available Slots
              </Text>
            </Body>
            <Right style={{ flex: 1, flexDirection: "row" }} />
          </Container>
        </Header>
        <Content>
          <List>
            {slots.map((item, index) => {
              return (
                <ListItem
                  key={index}
                  onPress={() => this.props.closeModal(false)}
                >
                  <Text>{item.slots}</Text>
                </ListItem>
              );
            })}
          </List>
        </Content>
      </Container>
    );
  }
}
