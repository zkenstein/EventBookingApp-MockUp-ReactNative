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
  Footer
} from "native-base";
import Color from "../../config/colors.json";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import Icon3 from "react-native-vector-icons/MaterialCommunityIcons";
import { Actions } from "react-native-router-flux";
import TicketListHeader from "../Tickets/TicketListHeader";

export default class NotificationList extends Component {
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
      }
      // {
      //   poster: require("../../images/ct2.jpg"),
      //   image: require("../../images/ct.jpg"),
      //   title: "Dato' Sri Siti Nurhaliza",
      //   venue: "Mon 16 Mac, 8:30 Axiata Arena"
      // },
      // {
      //   poster: require("../../images/lanyposter.jpg"),
      //   image: require("../../images/lany.jpg"),
      //   title: "Lany Malibu Nights World Tour",
      //   venue: "Mon 16 Mac, 8:30 Axiata Arena"
      // }
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
              onPress={() => Actions.QRCodeDetails({ item: item })}
            >
              <Image
                style={{
                  width: 50,
                  height: 50,
                  marginHorizontal: 5
                }}
                source={require("../../images/expImg/logoQr.png")}
              />
              <View
                style={{
                  flex: 1,
                  height: "100%",
                  marginHorizontal: 10,
                  paddingVertical: 5
                }}
              >
                <View style={{ flex: 1 }}>
                  <Text
                    style={[UtilStyles.standardText, { fontWeight: "bold" }]}
                  >
                    {item.title}
                  </Text>
                  <Text style={[UtilStyles.smallText]}>{item.venue}</Text>
                </View>
                <View style={{ justifyContent: "flex-end" }}>
                  <Text style={{ color: "grey", fontSize: 8 }}>
                    01-12-2019 09:28
                  </Text>
                </View>
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
        <TicketListHeader header_text="Notification" rkCardImgOverlay />
        <View style={{ paddingVertical: 20, marginBottom: 20 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <List>{this.renderlistEvent()}</List>
          </ScrollView>
        </View>
      </View>
    );
  }
}
