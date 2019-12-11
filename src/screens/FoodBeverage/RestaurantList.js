import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { Button, Left, Right, Body, List, Card } from "native-base";
import FoodBeverageListHeader from "./FoodBeverageListHeader";
import SearchBar from "../SearchBar";
import { UtilStyles } from "../../style/styles";
import Color from "../../config/colors.json";
import Icon from "react-native-vector-icons/Ionicons";
import { Actions } from "react-native-router-flux";

export default class RestaurantList extends Component {
  renderlistShop = () => {
    var temp = [
      {
        image: require("../../images/expImg/res1.jpg")
      },
      {
        image: require("../../images/expImg/res2.jpg")
      },
      {
        image: require("../../images/expImg/res3.jpg")
      },
      {
        image: require("../../images/expImg/res4.jpg")
      },
      {
        image: require("../../images/expImg/res5.jpg")
      },
      {
        image: require("../../images/expImg/res6.jpg")
      }
    ];
    return (
      <View>
        <FlatList
          numColumns={2}
          data={temp}
          keyExtractor={(object, index) => index}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback
              style={{
                margin: 10
              }}
              onPress={() => Actions.FoodBeverageList()}
            >
              <Card
                style={{
                  margin: 5,
                  height: 200,
                  width: 160,
                  justifyContent: "center",
                  borderRadius: 10,
                  borderWidth: 0
                }}
              >
                <View
                  style={{
                    alignItems: "center"
                    // marginTop: 20
                  }}
                >
                  <Image
                    style={{
                      width: 120,
                      resizeMode: "stretch",
                      height: 120
                    }}
                    source={item.image}
                  />
                </View>
              </Card>
            </TouchableWithoutFeedback>
          )}
        />
      </View>
    );
    //<ViewShop ticket={temp} />;
  };

  render() {
    return (
      <View style={UtilStyles.containerJustifyCenter}>
        <FoodBeverageListHeader rkCardImgOverlay />
        {/* <SearchBar /> */}
        <ScrollView
          automaticallyAdjustContentInsets={true}
          style={UtilStyles.container}
        >
          <List style={{ alignItems: "center" }}>{this.renderlistShop()}</List>
        </ScrollView>
      </View>
    );
  }
}
