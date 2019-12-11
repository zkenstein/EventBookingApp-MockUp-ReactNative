import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  FlatList
} from "react-native";
import { Card, Footer, List } from "native-base";
import { UtilStyles } from "../../style/styles";
import Color from "../../config/colors.json";
import { Actions } from "react-native-router-flux";

export default class BusinessList extends Component {
  onButtonPress = item => {
    Actions.pop();
    Actions.ArenaFacilitiesDetails({ item: item });
  };

  renderlistArena = () => {
    var temp = [
      {
        image: require("../../images/expImg/meeting.jpg"),
        title: "Meeting Room",
        desc: "Stadium National Bukit Jalil",
        price: "RM 90.00/hour",
        type: "Business",
        rentType: "Room"
      },
      {
        image: require("../../images/expImg/suite.jpg"),
        title: "Corporate Suite",
        desc: "Stadium National Bukit Jalil",
        price: "RM 90.00/hour",
        type: "Business",
        rentType: "Suite"
      }
    ];
    return (
      <View>
        <FlatList
          data={temp}
          keyExtractor={(object, index) => index}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback onPress={() => this.onButtonPress(item)}>
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <Image
                  style={{
                    width: 150,
                    height: 100,
                    borderRadius: 10
                  }}
                  source={item.image}
                />
                <View style={{ padding: 10, justifyContent: "center" }}>
                  <Text
                    style={[UtilStyles.standardText, { fontWeight: "bold" }]}
                  >
                    {item.title}
                  </Text>
                  <Text style={UtilStyles.standardText}>{item.desc}</Text>
                  <Text style={[UtilStyles.standardText, { color: "grey" }]}>
                    {item.type}
                  </Text>
                  <Text
                    style={[
                      UtilStyles.standardText,
                      { fontWeight: "bold", marginTop: 20 }
                    ]}
                  >
                    {item.price}
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          )}
        />
      </View>
    );
  };

  render() {
    return (
      // <View>
      <ScrollView
        automaticallyAdjustContentInsets={true}
        style={{
          backgroundColor: "white",
          paddingHorizontal: 20
        }}
      >
        <List>{this.renderlistArena()}</List>
      </ScrollView>
      // </View>
    );
  }
}
