import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  FlatList,
  BackHandler
} from "react-native";
import { UtilStyles } from "../../style/styles";
import {
  Button,
  Left,
  Right,
  Card,
  List,
  Body,
  Footer,
  Thumbnail
} from "native-base";
import Color from "../../config/colors.json";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import Icon3 from "react-native-vector-icons/MaterialCommunityIcons";
import { Actions } from "react-native-router-flux";
import TicketListHeader from "../Tickets/TicketListHeader";

export default class ChatList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderlistEvent = () => {
    var temp = [
      {
        poster: require("../../images/jasonposter.jpg"),
        image: require("../../images/jason.jpg"),
        price: "RM 463.96",
        title: "Jason Mraz In Kuala Lumpur",
        venue: "Mon 16 Mac, 8:30 Axiata Arena"
      },
      {
        poster: require("../../images/edposter.jpg"),
        image: require("../../images/edposter.jpg"),
        price: "RM 463.96",
        title: "Ed Sheeran Divide World Tour",
        venue: "Mon 16 Mac, 8:30 Axiata Arena"
      },
      {
        poster: require("../../images/ct2.jpg"),
        image: require("../../images/ct.jpg"),
        title: "Dato' Sri Siti Nurhaliza",
        venue: "Mon 16 Mac, 8:30 Axiata Arena"
      },
      {
        poster: require("../../images/lanyposter.jpg"),
        image: require("../../images/lany.jpg"),
        title: "Lany Malibu Nights World Tour",
        venue: "Mon 16 Mac, 8:30 Axiata Arena"
      }
    ];
    return (
      <View
        style={{
          marginHorizontal: 20
        }}
      >
        <FlatList
          data={temp}
          keyExtractor={(object, index) => index}
          renderItem={({ item }) => (
            <Button
              style={[
                UtilStyles.buttonMyPurchase,
                { height: 80, marginTop: 10, padding: 10 }
              ]}
            >
              <Thumbnail source={item.image} style={{ marginHorizontal: 5 }} />
              <View
                style={{
                  flex: 1,
                  height: "100%",
                  justifyContent: "center",
                  marginHorizontal: 10
                }}
              >
                <Text style={[UtilStyles.standardText, { fontWeight: "bold" }]}>
                  {item.title}
                </Text>

                <Text style={[UtilStyles.smallText]}>{item.venue}</Text>
              </View>
              <Icon
                size={25}
                style={{
                  color: "black",
                  marginRight: 5
                }}
                name="ios-arrow-forward"
              />
            </Button>
          )}
        />
      </View>
    );
  };

  render() {
    return (
      <View style={UtilStyles.container}>
        <TicketListHeader header_text="Chat" rkCardImgOverlay />
        <View style={{ paddingVertical: 20, marginBottom: 20 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <List>{this.renderlistEvent()}</List>
          </ScrollView>
        </View>
      </View>
    );
  }
}
