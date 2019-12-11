import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableWithoutFeedback,
  Image
} from "react-native";
import { Button, Left, Right, Body, List, Card } from "native-base";
import FoodBeverageListHeader from "./FoodBeverageListHeader";
import SearchBar from "../SearchBar";
import { UtilStyles } from "../../style/styles";
import Color from "../../config/colors.json";
import Icon from "react-native-vector-icons/Ionicons";
import { Actions } from "react-native-router-flux";

export default class FoodBeverageList extends Component {
  renderlistShop = () => {
    var temp = [
      {
        image: require("../../images/expImg/meal1.jpg"),
        title: "Set 1",
        price: "RM24.00",
        star: "4.9"
      },
      {
        image: require("../../images/expImg/meal2.jpg"),
        title: "Set 2",
        price: "RM24.00",
        star: "4.9"
      },
      {
        image: require("../../images/expImg/meal3.jpg"),
        title: "Set 3",
        price: "RM24.00",
        star: "4.9"
      },
      {
        image: require("../../images/expImg/meal4.jpg"),
        title: "Set 4",
        price: "RM24.00",
        star: "4.9"
      },
      {
        image: require("../../images/expImg/meal5.jpg"),
        title: "Set 5",
        price: "RM24.00",
        star: "4.9"
      },
      {
        image: require("../../images/expImg/meal6.jpg"),
        title: "Set 6",
        price: "RM24.00",
        star: "4.9"
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
              style={{ margin: 10 }}
              onPress={() => Actions.FoodBeverageDetails({ item: item })}
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
                    alignItems: "center",
                    marginTop: 20
                  }}
                >
                  <Image
                    style={{
                      width: 110,
                      resizeMode: "stretch",
                      height: 120
                    }}
                    source={item.image}
                  />
                </View>

                <View style={{ margin: 10 }}>
                  <Text style={UtilStyles.standardText}>{item.title}</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Left>
                      <Text
                        style={[
                          UtilStyles.standardText,
                          { fontWeight: "bold" }
                        ]}
                      >
                        {item.price}
                      </Text>
                    </Left>
                    <Right style={{ alignItems: "flex-end" }}>
                      {/* <View
                        style={{
                          backgroundColor: Color.material_red_400,
                          borderRadius: 30,
                          paddingHorizontal: 5,
                          paddingVertical: 1,
                          flexDirection: "row"
                        }}
                      >
                        <Icon
                          size={12}
                          style={{
                            color: "white",
                            marginRight: 3
                          }}
                          name="md-star"
                        />
                        <Text
                          style={[
                            UtilStyles.standardText,
                            { color: "white", fontWeight: "bold", fontSize: 10 }
                          ]}
                        >
                          {item.star}
                        </Text>
                      </View> */}
                    </Right>
                  </View>
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
        {/* <View
          style={{
            justifyContent: "center",
            margin: 10,
            alignItems: "center",
            flexDirection: "row"
          }}
        >
          <View style={{ flex: 1, paddingRight: 5 }}>
            <Button
              style={UtilStyles.buttonFillWidthWhite}
              onPress={() => Actions.pop()}
            >
              <Text style={UtilStyles.buttonTextBlack}>Back</Text>
            </Button>
          </View>
          <View style={{ flex: 1, paddingLeft: 5 }}>
            <Button
              style={UtilStyles.buttonFillWidthYellow}
              onPress={() => this.onButtonPress()}
            >
              <Left style={{ flex: 0.5 }} />
              <Body style={{ flex: 2, alignItems: "center" }}>
                <Text style={UtilStyles.buttonTextBlack}>Add Meal</Text>
              </Body>
              <Right style={{ flex: 1, alignItems: "center" }}>
                <View style={UtilStyles.circleWhiteOnButton}>
                  <Icon
                    size={20}
                    style={{
                      color: "black"
                    }}
                    name="ios-arrow-forward"
                    onPress={() => this.onButtonPress()}
                  />
                </View>
              </Right>
            </Button>
          </View>
        </View> */}
      </View>
    );
  }
}
