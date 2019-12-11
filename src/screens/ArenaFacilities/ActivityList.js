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

export default class ActivityList extends Component {
  onButtonPress = item => {
    Actions.pop();
    Actions.ArenaFacilitiesDetails({ item: item });
  };

  renderlistArena = () => {
    var temp = [
      {
        image: require("../../images/expImg/futsal.jpg"),
        title: "Futsal Court",
        desc: "Stadium National Bukit Jalil",
        price: "RM 90.00/hour",
        type: "Activity",
        rentType: "Court"
      },
      {
        image: require("../../images/expImg/pool.jpg"),
        title: "Swimming Pool",
        desc: "National Aquatiq Centre",
        price: "RM 90.00/hour",
        type: "Activity",
        rentType: false
      },
      {
        image: require("../../images/expImg/basketball.jpg"),
        title: "Basketball Court",
        desc: "National Aquatiq Centre",
        price: "RM 90.00/hour",
        type: "Activity",
        rentType: "Court"
      },
      {
        image: require("../../images/expImg/gym.jpg"),
        title: "Gym",
        desc: "National Aquatiq Centre",
        price: "RM 5/daily",
        type: "Activity",
        rentType: false
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
      <View style={UtilStyles.containerJustifyCenter}>
        <ScrollView
          automaticallyAdjustContentInsets={true}
          style={{
            backgroundColor: "white",
            paddingHorizontal: 20
          }}
        >
          <List>{this.renderlistArena()}</List>
        </ScrollView>
      </View>
    );
  }
}
